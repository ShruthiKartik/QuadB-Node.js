      const getItems=async()=>{
          let response = await fetch('http://localhost:3000/api/item',{
            method: 'GET'
          })
          const json = await response.json();
          if(json.error) {
              console.log(json.error)
          }
          else {
               for(let i=0;i<10;i++){
                tbody=document.getElementsByTagName('tbody')[0];
                let tr=document.createElement('tr');
                let th=document.createElement('th');
                th.setAttribute('scope','row');
                th.innerHTML=i+1;
                th.classList.add('text-light')
                let td1=document.createElement('td');
                let td2=document.createElement('td');
                let td3=document.createElement('td');
                let td4=document.createElement('td');
                let td5=document.createElement('td');
                td1.classList.add('text-light')
                td2.classList.add('text-light')
                td3.classList.add('text-light')
                td4.classList.add('text-light')
                td5.classList.add('text-light')
                td1.innerHTML=json[i].name;
                td2.innerHTML=json[i].last;
                // console.log(json[4])
                td3.innerHTML=`${Object.values(json[i].buy)[0]} / ${Object.values(json[i].sell)[0]}`;
                td4.innerHTML=Object.values(json[i].volume)[0];
                td5.innerHTML=json[i].base_unit;
                tr.appendChild(th);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);

               }
      }
    }
      getItems();