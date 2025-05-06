const restaurants = [
    { name: "비건 한식당", tags: ["vegan", "gluten-free"] },
    { name: "닭가슴살 도시락", tags: ["high-protein", "IR-friendly"] },
    { name: "로우카브 피자", tags: ["low-carb", "IR-friendly"] },
    { name: "일반 분식집", tags: ["rice", "fried"] }
  ];
  // html에 있는 요소를 가져와서 연결하기. 
  const input = document.getElementById("searchInput"); 
  const list = document.getElementById("restaurantList");

  function renderList(filtered) {
    // 빈 태그 생성후 그 안에 넣기 (appendChild 사용)
    list.innerHTML = ""; //기존리스트 초기화

    filtered.forEach(restaurant => {
      const li = document.createElement("li"); //li 태그 생성
      li.textContent = restaurant.name; //li 태그에 이름 넣기
      list.appendChild(li); //li 태그를 ul에 추가하기
      console.log(list);
    });
  }
  // 이 요소에 이벤트가 발생했을시에 함수를 실행해줘 
  input.addEventListener("input", function() {
        const keyword = input.value;
        if (keyword === "") {
            renderList([]);
            return; // 함수 종료
        }

        const filtered = restaurants.filter(restaurant => {
        //some -> 어던 배열 안에 하라나도 조건을 만족하는 요소가 있으면 true를 반환한다. 
        // 각 tag를 하나씩 돌면서 tag에 input.value가 포함되어 있는지 확인한다
        return restaurant.tags.some(tag => tag.includes(input.value)) // input에 있는 값이 tag에 포함되어 있는지 확인해줘
    });
    // 값 확인하고 싶으면 stringify나 forEach 로 확인. 
    console.log(JSON.stringify(filtered)); // 필터링된 결과를 콘솔에 찍어줘  
    filtered.forEach(restaurant => {
      console.log(restaurant.name); // 필터링된 결과를 콘솔에 찍어줘
    });  

    renderList(filtered); // 필터링된 결과를 리스트에 렌더링해줘
    
  });

  