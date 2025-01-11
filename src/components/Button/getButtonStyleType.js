function getStyle (styleType){
    const primaryStyle = "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900"
    const secondaryStyle = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900"
    const warningStyle = "bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900"

    if(styleType == "warning"){
        return warningStyle;
    } else if (styleType == "secondary"){
        return secondaryStyle;
    } else {
        return primaryStyle;
    }
}
export default getStyle;