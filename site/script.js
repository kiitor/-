const authClient = new google.auth.OAuth2({
    clientId: クライアントID,
    clientSecret: クライアントシークレット,
  });
  authClient.setCredentials({
    access_token: アクセストークン,
    refresh_token: リフレッシュトークン,
    token_type: 'Bearer',
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  });
  
  const sheetsClient = google.sheets({
    version: 'v4',
    auth: authClient,
  });