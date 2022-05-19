function asd(n,k) {
    let arr = [1]
    for (let i = 1;i < n + 1;i++) {
        if (i >= k) {
            for (let j = i - k;j < i;j++) {
                let x = arr[j]
                arr[i] = x
            }

        }
    }
    console.log(arr)
}
asd(6,3)