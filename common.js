const getCSS=(variavel)=>{
    const bodyStyles=getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}
const tickConfig={

    family: getCSS('--font'),
    size: 16,
    color: getCSS('1--primary-color')
}
export{getCSS, tickConfig}