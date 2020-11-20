const label = 'JetPakBoy'
const content = hsl(.13, 1, .5)

let keep = 2
let timer = 0

function evoProgress(dt) {
    timer += dt
    
    const progress = round((timer/keep)*100)

    if (timer > keep) {
        this.setLabel(label)
    } else {
        this.setLabel(progress + '%')
    }

}
