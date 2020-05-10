// On failure
.catch ((e) => {
    console.log(e);
    return [500, { error: e.message }];
})