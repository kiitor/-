function check() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  var range = sheet.getRange('A3:P445');
  var values = range.getValues();

  values = values.map(value => {
    return {
      grade: value[0],
      studentClass: value[1],
      num: value[2],
      name: value[3],
      shirts: { s: value[4], m: value[5], l: value[6], xl: value[7] },
      mechpen: value[8],
      file: value[9],
      keyhol: value[10],
      bag: value[11],
      sum: value[12],
      status: value[13],
      row: value[15]
    }
  });

  var searchGrade = Browser.inputBox("学年");
  var searchClass = Browser.inputBox("組");
  var searchNum = Browser.inputBox("出席番号");

  var result = values.filter(value => value.grade == searchGrade && value.studentClass == searchClass && value.num == searchNum);

  if (result[0].status) {
    Browser.msgBox(result[0].grade + '年' + result[0].studentClass + '組' + result[0].num + '番の' + result[0].name + 'さんはすでに受け取り済みになっています');
  } else {
    sheet.getRange('N' + String(result[0].row)).setValue(true);
    Browser.msgBox(result[0].grade + '年' + result[0].studentClass + '組' + result[0].num + '番の' + result[0].name + 'さんを受け取り済みにしました' + '\r' + 'S:' + result[0].shirts.s + ', M:' + result[0].shirts.m + ', L:' + result[0].shirts.l + ', XL:' + result[0].shirts.xl + ', ｼｬｰﾍﾟﾝ: ' + result[0].mechpen + ', ﾌｧｲﾙ:' + result[0].file + ', ｱｸｷｰ:' + result[0].keyhol + ', ﾄｰﾄﾊﾞｯｸﾞ:' + result[0].bag);
  }
