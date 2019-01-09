// Web App URL : https://script.google.com/macros/s/AKfycbyS6fJaAb6qOTy2l9-iiCHik2Adx2suf28gFPJipSc3DIUQSDSO/exec

var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()
var EMAIL_SENT = 'EMAIL_SENT';

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      //return header === 'timestamp' ? new Date() : e.parameter[header]
      return header === 'timestamp' ? Utilities.formatDate(new Date(), "IST", "MM-dd-yyyy HH:mm:ss") : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}

/**
 * Sends non-duplicate emails with data from the current spreadsheet.
 */
function sendEmails2() {
  console.info("Send mail function: onChange/time event fired");
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 1; // First row of data to process
  var numRows = sheet.getLastRow(); // Number of rows to process
  // Fetch the range
  var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn());
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  console.info("Data length is %d", data.length);
  for (var i = 1; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[2]; //Second column
    var message = row[7]; 
    var emailSent = row[8]; 
    if (emailSent != EMAIL_SENT) { // Prevents sending duplicates
      var subject = 'Sending emails from a Spreadsheet';
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 9).setValue(EMAIL_SENT);
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}