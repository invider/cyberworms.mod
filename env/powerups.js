const label = 'PowerUps'
const content = hsl(.54, 1, .5)       // blue

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
