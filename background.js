function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}
let arr=[25,50,150,325,725,1650]
let start=false;
let arr_index=0;
let game1=0;
let arr1=[];

chrome.webRequest.onCompleted.addListener(
  function(details) {
    if (details.method === "POST" && details.url.includes("GetGame")) {
      // Пример данных для тела запроса
      const requestBody = {
        key1: "value1",
        key2: "value2"
      };

      fetch(details.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...details.requestHeaders
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(responseBody => {
        // Извлекаем только нужные поля, если они существуют
        const filteredResponse = {
          results: responseBody.contest?.rounds?.map(round => round.result) || [],
          latest_contest_order: responseBody.latest_contest_order || null
        };
		
		let arr2 = filteredResponse.results;
		let game2 = filteredResponse.latest_contest_order;
		
		if(arr2.length!=0){
			if(start==false){
				if (arr2.at(-1)==null){
					console.log(arr[arr_index]);
					game1=game2;
					arr1=arr2;
					start=true;
				}
			}   
			else{
				if (arr2.length==arr1.length && game2==game1){
					if (arr2.at(-1)=="GOAL"){
						arr_index+=1;
						game1=game2;
						arr1=arr2;
					}
					if (arr2.at(-1)=="MISS"){
						arr_index=0;
						game1=game2;
						arr1=arr2;
					}
				}

				if (arr2.length==(arr1.length+1) && game2==game1){
					if (arr2.at(-1)==null){
						if (arr2.at(-2)=="MISS"){
							arr_index=0;
							console.log(arr[arr_index]);
							game1=game2;
							arr1=arr2;
						}
						if (arr2.at(-2)=="GOAL"){
							arr_index+=1;
							console.log(arr[arr_index]);
							game1=game2;
							arr1=arr2;
						}
					}
				}

				if (game2!=game1 && arr2.length==1){
					console.log(arr[arr_index]);
					game1=game2;
					arr1=arr2;
				}
			}
			//console.log(arr_index, arr2);
			// делать sum / проверку на sum
		}
		
		sleep(200);
      })
      .catch(error => console.error('Error fetching response body:', error));
    }
  },
  {urls: ["<all_urls>"]}
);