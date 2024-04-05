const LinkParser = url =>{
    // return url;
    let params = url.split('/');
    if(params[0] ===""){
        params.splice(0,1);
    }
    switch (params[0]) {
        case 'categories':
            return('categories?slug='+params[1]);
        default:
            return null;
    }
};
export default LinkParser;