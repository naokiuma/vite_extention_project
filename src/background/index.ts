//サービスワーカー
//ここでのconsoleなどは、拡張機能管理画面chrome://extensions/の「ビューを検証」から確認する


///タブのページ遷移を監視するイベント
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// ページの読み込みが未完了の場合はスルー
	console.log('tab遷移かいし')
	console.log(tabId)
	if (changeInfo.status !== "complete") {
	  return;
	}
  
	// URLがChromeの管理ページの場合はスルー
	if (tab?.url?.startsWith("chrome://")) {
	  return;
	}
  
	console.log(`opened URL: ${tab.url}`);
  });
  

  /**
   * popupなどから受けとったデータを取得
   * 引数 受け取った送信データ、送信元情報、返信用関数。
   * 
   */
  chrome.runtime.onMessage.addListener((request, sender, respond) => {
	// 送信データの内容に応じて処理を分岐できる
	switch (request.action) {
		case "getItems": {
			const items = ["back", "ground", "からメッセージです"];
			// 送信元へデータを返す
			respond(items);
		break;
	  }
		default: {
			throw new Error(`no action: ${request.action}`);
		}
	}
	return true;
  });


  export {};