const getParams = (args) => {
    const res = {};
    args.forEach((i, idx, ar) => {
        if (i.startsWith('-')) {
            if(idx === ar.length - 1) {
                res[i.substring(1)] = true;
            } else if (ar[idx + 1].startsWith('-')) {
                res[i.substring(1)] = true;
            } else {
                res[i.substring(1)] = ar[idx + 1];
            }
        }
    })
    
    return res;
};

export { getParams };