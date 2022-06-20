
function SwapProps(defaultObj, defaultTheme) {

    let objArray = Object.entries(defaultObj);
    let themeArray = Object.entries(defaultTheme);

    for(let i = 0; i < objArray.length; i++) {
      
        for(let j = 0; j < themeArray.length; j++) {

          if(objArray[i][1] === undefined && objArray[i][0] === themeArray[j][0]) {
             objArray[i][1] = themeArray[j][1];
          };

        };
    };

    return Object.fromEntries(objArray);

};

export default SwapProps;