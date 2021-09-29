//watch
let stopwatch = document.querySelectorAll(".stopwatch")
let convert = Array.from(stopwatch)
let body = document.querySelector("body")
let h2 = document.createElement("h2")



//Button Start
let start = document.querySelectorAll(".start")
let pause = document.querySelectorAll(".pause")
let reset = document.querySelectorAll(".reset")
let startCon = Array.from(start)
let pauseCon = Array.from(pause)
let resetCon = Array.from(reset)


startCon.map((start) => {
    start.addEventListener("click", function () {
        convert.map((main) => {
            let msCount = 0
            let sCount = 0
            let mCount = 0

            main.children[2].className;
            main.children[1].className;
            main.children[0].className;

            function stopwatch() {
                if (msCount < 10) {
                    main.children[2].innerHTML = "0" + msCount
                    msCount++
                } else if (msCount > 99) {
                    msCount = 0 + "0"
                    main.children[2].innerHTML = msCount
                    msCount++
                    sCount++
                    main.children[1].innerHTML = sCount
                    if (sCount < 10) {
                        main.children[1].innerHTML = "0" + sCount
                    } else if (sCount >= 60) {
                        sCount = 0 + "0"
                        mCount++
                        main.children[1].innerHTML = sCount
                        main.children[0].innerHTML = mCount
                        if (mCount < 10) {
                            mCount = "0" + mCount
                            main.children[0].innerHTML = mCount
                        } else if (mCount >= 60) {
                            mCount = 0 + "0"
                            main.children[0].innerHTML = mCount
                        }
                    }

                } else {
                    main.children[2].innerHTML = msCount
                    msCount++
                }
            }
            let timing = setInterval(() => {
                stopwatch()
            }, 50);
            pauseCon.map((pause) => {
                pause.addEventListener("click", function () {
                    clearInterval(timing)
                    
                })
            })
            resetCon.map((reset) => {
                reset.addEventListener("click", function () {
                    main.children[2].innerHTML = "0" + "0"
                    main.children[1].innerHTML = "0" + "0"
                    main.children[0].innerHTML = "0" + "0"
                    clearInterval(timing)
                })
            })

        })

    })
})