let array = [65, 41, 40, 87, 11, -56, 33, 72, 96, 60, -14, -3, -20];

while (true) {
    // Flag
    let sortable = true;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i+1]) {
            let memory = array[i];

            array[i] = array[i+1];
            array[i+1] = memory;

            sortable = false;
        }
    }

    if (sortable == true) {
        break;
    }
}

for (let x = 0; x < array.length; x++) {
    console.log(array[x]);
}