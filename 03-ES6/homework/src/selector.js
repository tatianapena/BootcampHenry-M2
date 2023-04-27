var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl))resultSet.push(startEl);
   
  //recorrer los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    let resultado = traverseDomAndCollectElements(matchFunc,startEl.children[i])
    
    resultSet = [...resultSet, ...resultado]
  }
  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { //'#myId', '.myClass', 'img.imagen', 'img'
  // tu código aquí
  if(selector[0] === '#') return 'id';
  else if(selector[0] === '.') return 'class'
  // for (let i = 0; i < selector.length; i++) {
  //   if(selector[i] === '.') return 'tag.class'
  // }
  // if (selector.indexOf(".") !== -1) return "tag.class";
  // if (selector.includes(".")) return "tag.class";
  if (selector.split( '.' ). length === 2 ) return 'tag.class'
  return 'tag'
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { //'#myId', '.myClass', 'div'
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    // matchFunction = function(elem){
    //   return '#' + elem.id === selector
    // }
    matchFunction = elem => `#${elem.id}` === selector
   
  } else if (selectorType === "class") {//'.myClass'
    // matchFunction = function(elem){//div
    //   for (let i = 0; i < elem.classList.length; i++) {
    //     if('.' + elem.classList[i] === selector) return true
    //   }
    //}
    matchFunction = elem => elem.classList.contains(selector.substring(1))
     
    
  } else if (selectorType === "tag.class") { //'div.myClass'
    //destructuración
    //separarlos por el puntico
    //recursión
    matchFunction = function(elem){ // ['div', 'myClass']
      let [t,c] = selector.split('.') // [tag, class] -> t = tag, c = class
      return matchFunctionMaker(t)(elem) && matchFunctionMaker('.' + c)(elem)
    }
    
  } else if (selectorType === "tag") { //'div'
    matchFunction = function(elem){
      return elem.tagName.toLowerCase() === selector.toLowerCase() //--> 'div' === 'div
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};



//$('.myClass') -> document.querySelectorAll('.myClass')
