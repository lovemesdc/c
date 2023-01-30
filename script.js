//opperating system
class calculater {
    constructor (previousOperandTextElement, currentOperandTextElement)
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement 
        this.clear
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand =''
        this.operation = undefined
        }
        delete() {

        }
           
        
        appendNumber (number) {
         if (number === '. ' && this.currentOperand.includes('.')) return
         this.currentOperand = this.currentOperand.toString() + number.toString()
 

        }


        chooseoperation(number){
        }
        
        compute(){
            if (this.currentOperand === '') return
            if (this.previousOperand !== ''){
                this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentoperand +''

        }

      updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand 
        this.previousOperandTextElement.innerText = this.currentOperand
      }

//the data set
const numberButtons = document. querySelectorAll(' [data-number]')
const operationButtons = document.querySelectorAll(' [data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]' )
constallClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector([data-previous-operand])
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//rules of photo
const calculator = new Calculator (previousOperandTextElementcurrentOperandTextElement)


    numberButtons.forEach(button=> {
      button.addEventListener('click',() => {
         calculator.appendNumber(button.innerText)
         calculator.updateDisplay()
        })
    })
    operationButtons.forEach(button=> {
        button.addEventListener('click',() => {
           calculator.choseoperation(button.innerText)
           calculator.updateDisplay()
          })
      })