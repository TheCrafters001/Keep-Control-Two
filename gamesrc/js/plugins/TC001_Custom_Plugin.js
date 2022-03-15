/*:
* @author TheCrafters001
* @plugindesc Custom Plugins for TheCrafters001 RPG Maker MV Games.
*
*
* @param Game_Title
* @type text
* @default Game_Name
* @desc The title of the game goes here. It appears on the title screen.
*
*
* @param Game_Author
* @type text
* @default TheCrafters001
* @desc The author of the game goes here. It only appears in the Debug Electron Console.
*
*
*
*
*
*
* @help
* ===================================
* =TheCrafters001 Custom Plugins    =
* ===================================
* This plugin contains a bunch of things that I made so I can
* Reuse them in my games. This is made only for my games, so it
* May not work for everyone!
*/

(function() {

    // Declare Vars
    var params = PluginManager.parameters("TC001_Custom_Plugin");
    var GameName = params["Game_Title"];
    var GameAuthor = params["Game_Author"];

    // Output a bunch of info
    console.log("Game By: " + GameAuthor)
    console.log("Game Name: " + GameName)

    // Draw Game Title - Code from rpg_scenes.js
    // OVERRIGHTS GAME TITLE IN TITLE SCREEN
    Scene_Title.prototype.drawGameTitle = function() {
        var x = 20;
        var y = Graphics.height / 4;
        var maxWidth = Graphics.width - x * 2;
        var text = GameName;
        console.log("Game Name Set to: " + GameName)
        this._gameTitleSprite.bitmap.outlineColor = 'black';
        this._gameTitleSprite.bitmap.outlineWidth = 8;
        this._gameTitleSprite.bitmap.fontSize = 72;
        this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
    };

})();