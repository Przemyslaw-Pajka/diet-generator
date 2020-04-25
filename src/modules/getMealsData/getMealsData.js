const getMeals = () => {
    return new Promise((resolve,reject) => {
        let xmlhttp = new XMLHttpRequest();
        let obj;
        xmlhttp.open('GET',`${window.location.origin}/data.json`);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function (aEvt) {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    obj = JSON.parse(JSON.parse(JSON.stringify(xmlhttp.responseText)));
                    resolve (obj);     
                }    
                if(xmlhttp.status == 404) {
                    reject(new Error(xmlhttp.statusText));  
                }  
            }
        };
    })
}
export default getMeals;