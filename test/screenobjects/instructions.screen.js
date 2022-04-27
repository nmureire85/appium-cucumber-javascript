class InstructionsScreen {
   get instructionsScreenView() {
    return $(
       process.env.PLATFORM === 'android'
         ? '//android.widget.ScrollView[@content-desc="instructions"]/android.view.ViewGroup/android.widget.TextView[1]'
         : '~Testing instructions');
   }  
}

module.exports = new InstructionsScreen();