var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(const child of startEl.children){
    const childResult = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...childResult];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) { 
  // tu código aquí
  if(selector[0] === '#') return 'id'; //'#hola'
  if(selector[0] === '.') return 'class'; // '.class'
  if(selector.split('.').length > 1) return 'tag.class'; //'span.hola => el metodo split me separa 
  //los elemento con el parametro del punto y me retorna ['span','hola'] un array de 2 elementos. 
  //entonces si yo le digo q su tamano sea mayor a uno listo se cumplira la condicion.
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => {
      if(`#${element.id}`=== selector) return true;
      return false;
    };
  } else if (selectorType === "class") { // aqui hay que hacer un for, porque siempre hay varias 
    //clases que hay que recorrer, al cambio el ID es solo un elemento.
    matchFunction = (element) => {
      for(const className of element.classList){
        if(`.${className}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
    const [tag, className] = selector.split('.');
    // checkear que el tag corresponda con el elemento
    // checkear que la class este incluida en el elemento
    return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element);
    }
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
    if(element.tagName.toLowerCase() === selector) return true;
    return false;
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
