<template>
  <div id="anagra-input">
    <h1>Check if two words are anagrams.</h1>
    <h4>First Word:</h4>
    <input v-model="anagrams.wordone" type="text" placeholder="First word">
    <h4>Second Word:</h4>
    <input v-model="anagrams.wordtwo" type="text" placeholder="Second word">
    <input id="check-button" type="button" name="" value="CHECK!" v-on:click="areStringsAnagrams(anagrams.wordone, anagrams.wordtwo)">
    <p class="message" v-model="resultmessage">{{resultmessage}}</p>
    <input v-if="showResetButton" id="reset-button" type="button" name="" value="Reset" v-on:click="reset()">
  </div>
</template>

<script>
  export default {

    data () {
      return {
        anagrams: {
          wordone: '',
          wordtwo: '',
          isAnagram: undefined
        },
        resultmessage: ''
      }
    },
    methods: {

      areStringsAnagrams (string1, string2) {
        let areAnagrams = null
        let x = this.reArrangeStringCharactersOrder(string1)
        let y = this.reArrangeStringCharactersOrder(string2)
        let xLength = this.checkStringLength(x)
        let yLength = this.checkStringLength(y)

        // validate strings length
        if (xLength !== yLength) {
          areAnagrams = false
          this.resultmessage = 'Strings length is not the same. Words are NOT anagrams.'
        }

        if (x === '' || y === '') {
          this.resultmessage = 'Empty inputs. Please fill in with some text'
          return
        }

        if (x === y) {
          areAnagrams = true
          this.resultmessage = "It's a match! Words are anagrams"
        }

        if (x !== y) {
          areAnagrams = false
          this.resultmessage = 'Words are NOT anagrams...'
        }

        this.showResetButton = true

        return areAnagrams
      },

      reArrangeStringCharactersOrder (string) {
        let orderedString = string.split('').sort().join('')
        return orderedString
      },

      checkStringLength (string) {
        return string.length
      },

      reset () {
        this.resultmessage = ''
        this.anagrams.wordone = ''
        this.anagrams.wordtwo = ''
        this.showResetButton = false
      }

    } // end methods object
  }
</script>

<style>
  #anagra-input {
    padding: 0 10px 0 10px;
  }
  input {
    width: 50%;
    height: 46px;
    font-size: 18px;
    padding: 5px;
    color: cornflowerblue;
  }

  #check-button,
  #reset-button {
    margin-top: 46px;
    height: 46px;
    border: none;
  }

  #check-button:hover,
  #reset-button:hover {
    background-color: cornflowerblue;
    color: coral;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>