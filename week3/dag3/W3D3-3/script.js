const doSomethingWithData = async () => {
    const data = await getData();
    console.log('Here is the data you asked for', data);
};

doSomethingWithData();