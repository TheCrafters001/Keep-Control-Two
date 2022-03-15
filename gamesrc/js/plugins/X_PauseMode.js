/*:
 * @pluginname X_PauseMode
 * @plugindesc A customizable pause scene, enhancing mobile game-play and increasing accessibility
 * <X_PauseMode>
 * @modulename X_PauseMode
 * @required
 * @external
 *
 * @author FeniXEngine Contributors (https://fenixenginemv.gitlab.io/)
 *
 * @param Scene Options
 *
 * @param pauseKey
 * @parent Scene Options
 * @text Pause Key
 * @type Number
 * @desc  The key used to pause the game (Not used for mobile devices)
 * @type number
 * @default 100
 *
 * @parent Scene Options
 * @param pauseText
 * @text Pause Text
 * @type struct<Element>
 * @desc  The text displayed on screen when paused
 * @default {"enable":"true","text":"Pause Mode","x":"Graphics.width / 2 - 100","y":"Graphics.height / 2 - 50","align":"left","font":"GameFont","fontSize":"50"}
 *
 * @param exitEnterSe
 * @text Enter/Exit Sound
 * @parent Scene Options
 * @desc  The sound to play when entering or exiting the pause mode scene.
 * @type struct<SoundEffect>
 * @default {"name":"Flash1","volume":"40","pitch":"100","pan":"0.5"}
 *
 * @param pauseBackground
 * @text Pause Background
 * @parent Scene Options
 * @desc  The background used for the pause mode scene.
 * @type struct<Background>
 * @default {"blur":"true","darkRect":"true","custom":"","x":"0","y":"0"}
 *
 * @param overrideMenuAccess
 * @text Override Menu Access
 * @parent Scene Options
 * @desc Overriding menu access will open the pause mode scene instead of the menu. The menu can be accessed from the pause mode scene.
 * @type boolean
 * @default false
 * @type Boolean
 *
 * @param Buttons
 *
 * @param buttonsContainer
 * @text Buttons Container
 * @parent Buttons
 * @type struct<ButtonContainer>
 * @desc  All burtons are in one container, changing settings here affect all buttons.
 * @default {"containerX":"Graphics.boxWidth / 2 - 150","containerY":"Graphics.boxHeight / 2","spacing":"75"}
 *
 * @param returnButton
 * @text Return Button
 * @parent Buttons
 * @desc  The return button continues gameplay
 * @type struct<Button>
 * @default {"pos":"0","enable":"true","image":"exitLeft","commonEvent":"0"}
 *
 * @param menuButton
 * @text Menu Button
 * @parent Buttons
 * @type struct<Button>
 * @desc  The menu button will open the main menu
 * @default {"pos":"1","enable":"true","image":"menuList","commonEvent":"0"}
 *
 * @param optionsButton
 * @text Options Button
 * @parent Buttons
 * @type struct<Button>
 * @desc  The options button opens the default options menu
 * @default {"pos":"2","enable":"true","image":"options","commonEvent":"0"}
 *
 * @param audioButton
 * @text Mute Button
 * @parent Buttons
 * @type struct<Button>
 * @desc  The mute button mutes all audio
 * @default {"pos":"3","enable":"true","image":"audio","commonEvent":"0"}
 *
 * @param saveButton
 * @text Save Button
 * @parent Buttons
 * @type struct<Button>
 * @desc  The mute button mutes all audio
 * @default {"pos":"4","enable":"true","image":"save","commonEvent":"0"}
 *
 * @param Common Event Buttons
 *
 * @param commonEventButtons
 * @text Common Event Button
 * @parent Common Event Buttons
 * @type struct<Button>[]
 * @desc  An extra common event button.
 * @default ["{\"pos\":\"0\",\"enable\":\"false\",\"image\":\"\",\"commonEvent\":\"0\"}"]
 *
 * @param buttonSpriteFrames
 * @text Button Sprite Frames
 * @parent Buttons
 * @type struct<ButtonFrames>
 * @desc  Basic details about your buttons spritesheet frames.
 * @default {"size":"64","normal":"0","touched":"1","disabled":"2"}
 *
 * @param buttonsTouchSound
 * @text Buttons Touch Sound
 * @parent Buttons
 * @desc  Sound effect when a button is touched
 * @type struct<SoundEffect>
 * @default {"name":"Cursor1","volume":"100","pitch":"100","pan":"0.5"}
 *
 * @param Addons/Extras
 *
 * @param mapName
 * @text Location
 * @parent Addons/Extras
 * @desc  Add the current map name with an icon.
 * @type struct<Addon>
 * @default {"enable":"true","containerX":"5","containerY":"0","icon":"191","el":"{\"enable\":\"true\",\"text\":\"Location: \",\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el1":"","el2":""}
 *
 * @param playtime
 * @text Play Time
 * @parent Addons/Extras
 * @desc  Add the playtime with an icon.
 * @type struct<Addon>
 * @default {"enable":"false","containerX":"5","containerY":"Graphics.boxHeight","icon":"0","el":"{\"enable\":\"false\",\"text\":\"Playtime: \",\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el1":"","el2":""}
 *
 * @param socialButtons
 * @text Social Media Buttons Addon
 * @parent Addons/Extras
 * @desc  Adds Social Media Buttons - Contains No Elements
 * @type struct<Addon>
 * @default {"enable":"false","containerX":"Graphics.boxWidth","containerY":"Graphics.boxHeight","icon":"0","el":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}","el1":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}","el2":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}"}
 *
 *@help
 ------------------------------------------------------------------------------
 # TERMS OF USE

--------------------------------------------------------------------------------
 MIT License -

 * Free for use in any RPG Maker MV game project, commercial or otherwise

 * Credit may go to FeniXEngine Contributors or FeniXEngine

 * Though not required, you may provide a link back to the original source code,
   repository or website.

------------------------------------------------------------------------------
 # Instructions

 ------------------------------------------------------------------------------
 ## About Button Sprite Sheets

 * All buttons require you to use an image, this image should contain 3 frames.

 * Button frames can only be 1 line long and only require 3 frames.
   * Each frame is a button state. Normal, Touched and Disabled.
   * Keep a consistent pattern for all buttons. If  your image is in the order of
   "Normal | Touched | Disabled", make sure all you images are the same way.
 * You can freely adjust the frame size in the plugin parameters and
 choose which frame should be which state.

------------------------------------------------------------------------------
 ## About Add-Ons

 ------------------------------------------------------------------------------
Social Media Buttons add-on requires you to have the corresponding plugin
installed and turned on.

=> Playtime - contains 1 element
  Main: The playtime and prefix

=> Location - contains 1 element
  Main: The location and prefix

=> Social Media Buttons - Contains no elements
  -------------------------------------------------------------------------------
 # Plugin Commands

 ------------------------------------------------------------------------------
 No Plugins commands are available with this plugins
*/

/* eslint-disable spaced-comment */

/*~struct~SoundEffect:
  @param name
  @text Name
  @type file
  @dir audio/se/
  @desc The name of the sound effect

  @param volume
  @text Volume
  @type number
  @min 1
  @max 100
  @default 50
  @desc The volume of this sound effect. This controls the loudness and softness of the audio.

  @param pitch
  @text Pitch
  @type number
  @min 1
  @max 200
  @default 100
  @desc The pitch of this sound effect. This controls the highs and lows of the audio.

  @param pan
  @text Pan
  @type number
  @default 0.5
  @decimals 0.1
  @min 0
  @max 1
  @desc The pan of this sound effect.
*/

/*~struct~Addon:
  @param enable
  @text Enable Addon
  @type boolean
  @default false
  @desc Turn on this addon to add it to the pause mode scene

  @param containerX
  @text Container's X Position(eval)
  @default 0
  @desc The x position of the container which holds all of this add ons elements

  @param containerY
  @text Container's Y Position(eval)
  @default 0
  @desc The y position of the container which holds all of this add ons elements

  @param icon
  @text Icon
  @default 0
  @desc If this add-on contain an icon, then input the iconId of the icon you'd like displayed

  @param el
  @text Main Element
  @type struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc All add-ons contain one element, these are the options for changing the element within the add-ons container.

  @param el1
  @text Element 2
  @type  struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc If this add-on contains a 2nd element, you can change it's options here (See Help For More Information)

  @param el2
  @text Element 3
  @type  struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc If this add-on contains a 3rd element, you can change it's options here (See Help For More Information)
*/

/*~struct~Element:
  @param enable
  @text Enable
  @type boolean
  @default
  @desc Hide or show the element.

  @param text
  @text Text
  @default
  @desc If the element contains a customizable text element, you can change it here.

  @param x
  @text X Position
  @type number
  @default 0
  @desc The x position of of this element

  @param y
  @text Y Position
  @type number
  @default 0
  @desc The y position of this element

  @param align
  @text Text Alignment
  @default left
  @desc The text alignment of this elements font

  @param font
  @text Font Face
  @default GameFont
  @desc The font face for the text within this element

  @param fontSize
  @text Font Size
  @default 24
  @desc The font size for the text within this element
*/

/*~struct~ButtonContainer:
  @param containerX
  @text Container's X Position(eval)
  @default 0
  @desc The x position of the container which holds all of the button elements

  @param containerY
  @text Container's Y Position(eval)
  @default 0
  @desc The y position of the container which holds all of the buttons elements

  @param spacing
  @text Spacing
  @type number
  @default 25
  desc The spacing between all the elements within the container. If applicable. (See Help For More Info)
  */

/*~struct~Button:
  @param pos
  @text Position
  @type number
  @default 0
  @desc The position the element should appear within the button container

  @param enable
  @text Enable
  @type boolean
  @default false
  @desc Choose to enable this button, so it appears on the pause mode scene

  @param image
  @text Button Image
  @type file
  @dir img\system
  @default
  @desc The button-sheet image to use for this button.

  @param commonEvent
  @text Common Event
  @type common_event
  @default 0
  @desc The common event to run when this button is pressed.
*/

/*~struct~ButtonFrames:
  @param size
  @type number
  @text Size Of Button Sheet
  @default 64
  @desc The size of one frame on the button-sheet sprite-sheet

  @param normal
  @text Normal Frame
  @type number
  @default 0
  @desc The frame to use on the button-sheet sprite-sheet when the button is not being touched..

  @param touched
  @text On Touch Frame
  @type number
  @default 1
  @desc The frame to use on the button-sheet sprite-sheet when the button is touched.

  @param disabled
  @type number
  @text Disabled Frame
  @default 2
  @desc The frame to use on the button-sheet sprite-sheet when the button is disabled
  */

/*~struct~Background:
  @param blur
  @type boolean
  @text Blurred Background
  @default true
  @desc Create a blurred background of the previous scene.

  @param darkRect
  @type boolean
  @text Darken Background
  @default true
  @desc Create a darkened transparent sprite to cover the background.

  @param custom
  @type file
  @dir img
  @text Custom Background
  @default
  @desc You can use a custom background instead.

  @param x
  @type number
  @text Custom Background X
  @default 0
  @desc Custom backgrounds x position on the scene.

  @param y
  @type number
  @text Custom Background Y
  @default 0
  @desc Custom backgrounds y position on the scene.
  */

(function () {
'use strict';

/**
 * Recursive method that will convert all string values in an object to a more
 * appropriate type.
 *
 * In MV there are a lot of objects filled with strings of different values, a lot
 * of times we need to convert each value manually, instead use this to quickly
 * deep parse each value from string to the correct type.
 *
 * @function convertParameters
 * @since 1.0.0
 * @memberof module:Utils
 *
 * @param {object} parameters - The string filled object you want converted
 *
 * @returns An object with it's string values converted
 * @example
 *
 * const myParams = { p1: '22', p2: 'true' }
 * convertParameters(myParams) // => { p1: 22, p2: true }
 *
 * const myParams = { p1: '{a: 1'1, c: '2'}', p2: '[{}, {}, {}]' }
 * convertParameters(myParams) // => { p1: {a: 1, c: 2}, p2: [{}, {}, {}] }
 *
 */
function convertParameters (parameters) {
  function parseParameters (string) {
    try {
      return JSON.parse(string, (key, value) => {
        try {
          return parseParameters(value)
        } catch (e) {
          return value
        }
      })
    } catch (e) {
      return string
    }
  }
  return parseParameters(JSON.stringify(parameters))
}

const rawParameters = $plugins.filter(
  plugin => plugin.description.contains('<X_PauseMode>'))[0].parameters;

const _Params = convertParameters(rawParameters);

_Params.buttons = {
  return: _Params.returnButton,
  menu: _Params.menuButton,
  audio: _Params.audioButton,
  options: _Params.optionsButton,
  save: _Params.saveButton
};

_Params.buttonOptions = {
  container: _Params.buttonsContainer,
  frames: _Params.buttonSpriteFrames,
  sound: _Params.buttonsTouchSound
};

AudioManager._isMuted = false;

AudioManager._savedVolume = {};

AudioManager.isMute = function () {
  return this._isMuted === true
};

AudioManager.saveVolume = function () {
  this._savedVolume = {
    bgm: AudioManager.bgmVolume,
    bgs: AudioManager.bgsVolume,
    me: AudioManager.meVolume,
    se: AudioManager.seVolume
  };
};

AudioManager.restoreVolume = function () {
  this.bgmVolume = this._savedVolume.bgm || 15;
  this.bgsVolume = this._savedVolume.bgs || 15;
  this.meVolume = this._savedVolume.me || 15;
  this.seVolume = this._savedVolume.se || 15;
};

AudioManager.muteAudio = function () {
  if (!this._isMuted) {
    this.saveVolume();
    this.bgmVolume = 0;
    this.bgsVolume = 0;
    this.meVolume = 0;
    this.seVolume = 0;
    this._isMuted = true;
  } else if (this._isMuted) {
    this.restoreVolume();
    this._isMuted = false;
  }
};

Object.defineProperty(ConfigManager, 'isMuted', {
  get: function () {
    return AudioManager.isMute()
  },
  set: function (value) {
    AudioManager._isMuted = value;
  },
  configurable: true
});

Object.defineProperty(ConfigManager, 'volumeBeforeMute', {
  get: function () {
    return AudioManager._savedVolume
  },
  set: function (value) {
    AudioManager._savedVolume = value;
  },
  configurable: true
});

const ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  const config = ConfigManager_makeData.call(this);
  config.isMuted = this.isMuted;
  config.volumeBeforeMute = this.volumeBeforeMute;
  return config
};

const ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (config) {
  ConfigManager_applyData.call(this, config);
  this.isMuted = config.isMuted;
  this.volumeBeforeMute = config.volumeBeforeMute;
};

class PauseModeButton extends Sprite_Button {
  constructor (options, x, y) {
    super();
    super.initialize();
    this._emitter = new PIXI.utils.EventEmitter();
    this._size = _Params.buttonOptions.frames.size;
    this._data = options;
    this.menuPosition = options.menuPosition;
    this.bitmap = options.src;
    this.setClickHandler(options.action);
    this._isTouched = false;
    this._mousePos = {};
    this._isEnabled = true;
    this.forceSelect = false;
    this.initializeFrames();
  }

  on (event, callback) {
    this._emitter.on(event, callback);
  }

  initializeFrames () {
    this._touchedFrame = _Params.buttonOptions.frames.touched * this._size;
    this._disabledFrame = _Params.buttonOptions.frames.disabled * this._size;
    this._normalFrame = _Params.buttonOptions.frames.normal * this._size;
    this.setColdFrame(this._normalFrame, 0, this._size, this._size);
    this.setHotFrame(this._touchedFrame, 0, this._size, this._size);
    this.setFrame(this._normalFrame, 0, this._size, this._size);
  }

  callClickHandler () {
    if (this._clickHandler) {
      this._clickHandler(this._data.type, this);
    }
  }

  updateMousePosition (event) {
    this._mousePos.x = event.pageX;
    this._mousePos.y = event.pageY;
  }

  update () {
    super.update();
  }

  commonEvent () {
    return this._data.commonEvent
  }

  updateFrame (event) {
    let frame = null;

    if (this.forceSelect === true && !this._isTouched) {
      AudioManager.playSe(_Params.buttonOptions.sound);
      frame = this._hotFrame;
      this._isTouched = true;
      this.setFrame(frame.x, frame.y, frame.width, frame.height);
      return
    }

    if (this.forceSelect === false) {
      if (this.isButtonTouching() && !this._isTouched && this._isEnabled) {
        AudioManager.playSe(_Params.buttonOptions.sound);
        frame = this._hotFrame;
        this._isTouched = true;
        this._emitter.emit('touched', this._data.type, this);
      } else if (this._isTouched && !this.isButtonTouching()) {
        frame = this._coldFrame;
        this._isTouched = false;
      }

      if (frame && this._isEnabled) {
        this.setFrame(frame.x, frame.y, frame.width, frame.height);
      }
    }
  }

  isButtonTouching () {
    if (!this._mousePos.x || !this._mousePos.y) { return false }
    const x = this.canvasToLocalX(Graphics.pageToCanvasX(this._mousePos.x));
    const y = this.canvasToLocalY(Graphics.pageToCanvasY(this._mousePos.y));
    return x >= 0 && y >= 0 && x < this.width && y < this.height
  }

  setDisabled () {
    this.setFrame(this._disabledFrame, 0, this._size, this._size);
    this._isEnabled = false;
  }

  setEnabled () {
    this.setFrame(this._normalFrame, 0, this._size, this._size);
    this._isEnabled = true;
  }

  setForceHotFrame () {
    this.forceSelect = true;
  }

  setPosition (x, y) {
    this.x = x;
    this.y = y;
  }
}

class ButtonContainer extends Sprite_Button {
  constructor (x, y, onPress) {
    super();
    this.buttons = [];
    this._onPress = onPress;
    this._listener = this.processButtonTouching.bind(this);
    document.addEventListener('mousemove', this._listener);
    this.createButtons();
  }

  processButtonTouching (event) {
    this.children.forEach(button => button.updateMousePosition(event));
  }

  createButtons () {
    const ceButtons = _Params.commonEventButtons;
    const gameButtons = _Params.buttons;
    const sources = { ...ceButtons, ...gameButtons };

    Object.keys(sources).forEach(button => {
      const options = sources[button];
      if (!options.enable) {
        return
      }
      const position = options.pos;
      const spacing = _Params.buttonOptions.container.spacing;
      const x = position === 1 ? 0 : position === 2 ? spacing : spacing * (position - 1);
      const spriteButton = new PauseModeButton({
        /* Common events are #s, so ensure type = 'common' */
        type: !isNaN(button) ? 'common' : button,
        src: ImageManager.loadSystem(options.image),
        action: this._onPress,
        commonEvent: options.commonEvent,
        menuPosition: position
      });

      this.addChild(spriteButton);
      this.buttons.push(spriteButton);

      spriteButton.bitmap.addLoadListener(() => {
        spriteButton.setPosition(x + spriteButton.width, 0);
        this.resize();

        if (!$gameSystem.isMenuEnabled() && button === 'menu') {
          spriteButton.setDisabled();
        }

        if (AudioManager.isMute() && button === 'audio') {
          spriteButton.setDisabled();
        }

        if (!$gameSystem.isSaveEnabled() && button === 'save') {
          spriteButton.setDisabled();
        }
      });
    });
  }

  setPosition () {
    const opts = _Params.buttonOptions.container;
    const x = this._tryEval(opts.containerX);
    const y = this._tryEval(opts.containerY);
    this.x = this.x >= Graphics.boxWidth ? x - this.getBounds().width : x;
    this.y = this.y >= Graphics.boxHeight ? y - this.getBounds().height : y;
  }

  resize () {
    this.calculateBounds();
    this.setPosition();
  }

  removeListener () {
    document.removeEventListener('mousemove', this._listener);
  }

  _tryEval (expression) {
    try {
      // eslint-disable-next-line no-eval
      return eval(expression)
    } catch (error) {
      console.error('An error occurred from running an expression', expression);
    }
  }
}

class Scene_GamePause extends Scene_MenuBase {
  constructor () {
    super();
    this._selectedButtonPosition = -1;
    this._timeTextSprite = null;
  }

  terminate () {
    super.terminate();
    this._buttonContainer.removeListener();
    ConfigManager.save();
  }

  create () {
    this.createPauseBackground();
    this.createInfoContainer();
    this.createButtonContainer();
    this.createPauseText();
    this.createMapName();
    this.createPlaytime();
    this.createSocialMediaButtons();
  }

  createButtonContainer () {
    this._buttonContainer = new ButtonContainer(0, 0, this.onButtonPress.bind(this));
    this._buttonContainer.buttons.forEach(button => {
      button.on('touched', this._onButtonTouched.bind(this));
    });
    this.addChild(this._buttonContainer);
  }

  createInfoContainer () {
    this._infoContainer = new PIXI.Container();
    this.addChild(this._infoContainer);
  }

  createSocialMediaButtons () {
    const options = _Params.socialButtons;
    if (!options.enable) { return }
    if (typeof window.X_SocialMediaButtons === 'undefined') {
      throw new Error('X Pause Mode: Cannot find plugin "Social Media Buttons"')
    }
    const x = this._tryEval(options.containerX);
    const y = this._tryEval(options.containerY);
    const container = new window.X_SocialMediaButtons.Container(x, y);
    this.addChild(container);
  }

  createPlaytime () {
    const options = _Params.playtime;
    if (!options.enable) {
      return
    }
    const element = options.el;
    const playtime = $gameSystem.playtimeText();
    const x = this._tryEval(options.containerX) || 0;
    const y = this._tryEval(options.containerY) || 0;
    const text = element.text || 'Playtime: ';
    const font = element.fontSize || 18;
    const align = element.align || 'left';
    this.createTextSprite(text + playtime, x, y, font, align);
  }

  createMapName () {
    const options = _Params.mapName;
    if (!options.enable) {
      return
    }
    const element = options.el;
    const mapName = $gameMap.displayName();
    const x = this._tryEval(options.containerX) || 0;
    const y = this._tryEval(options.containerY) || 0;
    const text = element.text || 'Location: ';
    const font = element.fontSize || 18;
    const align = element.align || 'left';
    this.createTextSprite(text + mapName, x, y, font, align);
  }

  createPauseText () {
    const options = _Params.pauseText;
    if (!options.enable) {
      return
    }
    const x = this._tryEval(options.x);
    const y = this._tryEval(options.y);
    this.createTextSprite(options.text, x, y, options.fontSize, options.align);
  }

  createTextSprite (text, x, y, fontSize, align) {
    const bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
    bitmap.outlineColor = 'black';
    bitmap.outlineWidth = 2;
    bitmap.fontSize = fontSize || 24;
    bitmap.drawText(text, 0, 0, Graphics.width, 50, align);

    const textWidth = bitmap.measureTextWidth(text);
    const sprite = new Sprite(bitmap);
    sprite.x = x >= Graphics.boxWidth ? Graphics.boxWidth - (textWidth + 10) : x;
    sprite.y = y >= Graphics.boxHeight ? Graphics.boxHeight - fontSize * 2 : y;
    this._infoContainer.addChild(sprite);
    this._timeText = { sprite, bitmap };
  }

  createDarkRect (x, y, width, height) {
    const bitmap = new Bitmap(width, height);
    const sprite = new Sprite(bitmap);
    const color1 = 'rgba(0, 0, 0, 0.6)';
    const color2 = 'rgba(0, 0, 0, 0)';
    bitmap.gradientFillRect(x, y, width / 2, height, color2, color1);
    bitmap.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
    this.addChild(sprite);
  }

  createPauseBackground () {
    const options = _Params.pauseBackground;
    let customBg = null;
    if (options.custom) {
      customBg = ImageManager.loadBitmap('img/', options.custom);
    }
    const bitmap = options.blur ? SceneManager.backgroundBitmap() : customBg;
    this._pauseSprite = new Sprite(bitmap);
    this.addChild(this._pauseSprite);

    if (options.darkRect) {
      this.createDarkRect(0, 0, Graphics.boxWidth, Graphics.boxHeight);
    }
  }

  returnToMap () {
    AudioManager.playSe(_Params.exitEnterSe);
    SceneManager.goto(Scene_Map);
  }

  getButton (position) {
    return this._buttonContainer.buttons.find(button => button.menuPosition === position)
  }

  lastButton () {
    const buttons = this._buttonContainer.buttons;
    return buttons.sort((a, b) => b.menuPosition - a.menuPosition)[0]
  }

  selectButton (position) {
    this.getButton(position).forceSelect = true;
    this._selectedButtonPosition = position;
  }

  deselectButton (position) {
    this.getButton(position).forceSelect = false;
  }

  selectedButton () {
    return this.getButton(this._selectedButtonPosition)
  }

  selectPrevButton () {
    this._selectedButtonPosition--;

    if (this._selectedButtonPosition <= -1) {
      this._selectedButtonPosition = this.lastButton().menuPosition;
      this.deselectButton(0);
    } else {
      this.deselectButton(this._selectedButtonPosition + 1);
    }
    this.selectButton(this._selectedButtonPosition);
  }

  selectNextButton () {
    this._selectedButtonPosition++;

    if (this._selectedButtonPosition > this.lastButton().menuPosition) {
      this._selectedButtonPosition = 0;
      this.deselectButton(this.lastButton().menuPosition);
    } else if (this._selectedButtonPosition !== 0) {
      this.deselectButton(this._selectedButtonPosition - 1);
    }
    this.selectButton(this._selectedButtonPosition);
  }

  _onButtonTouched (button) {
    // Reset index and disable force select if button is touched
    if (this.getButton(this._selectedButtonPosition)) {
      this.deselectButton(this._selectedButtonPosition);
      this._selectedButtonPosition = -1;
    }
  }

  updateTimeText () {
    if (this._timeText.sprite) {
      const options = _Params.playtime;
      this._timeText.bitmap.clear();
      const text = `${options.el.text}${$gameSystem.playtimeText()}`;
      const align = options.align;
      this._timeText.bitmap.drawText(text, 0, 0, Graphics.width, 50, align);
    }
  }

  update () {
    super.update();
    this.updateTimeText();
    if (Input.isTriggered('menu') || TouchInput.isCancelled()) {
      this.returnToMap();
    }

    if (Input.isTriggered('left')) {
      this.selectPrevButton();
    }

    if (Input.isTriggered('right')) {
      this.selectNextButton();
    }

    if (Input.isTriggered('ok')) {
      if (this.selectedButton()) {
        this.selectedButton().callClickHandler();
      }
    }
  }

  onButtonPress (type, button) {
    switch (type) {
      case 'menu':
        if (this.isMenuEnabled()) {
          SceneManager.push(Scene_Menu);
        } else {
          SoundManager.playBuzzer();
        }
        break

      case 'audio':
        if (ConfigManager.isMuted) {
          button.setEnabled();
        } else {
          button.setDisabled();
        }
        AudioManager.muteAudio();
        break

      case 'options':
        SceneManager.push(Scene_Options);
        break

      case 'save':
        if ($gameSystem.isSaveEnabled()) {
          SceneManager.push(Scene_Save);
        } else {
          SoundManager.playBuzzer();
        }
        break

      case 'return':
        this.returnToMap();
        break

      case 'common':
        this.returnToMap();
        setTimeout(() => {
          $gameTemp.reserveCommonEvent(button.commonEvent());
          $gameMap.requestRefresh();
        }, 300);
        break
      default:
        break
    }
  }

  isMenuEnabled () {
    return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning()
  }

  _tryEval (expression) {
    try {
      // eslint-disable-next-line no-eval
      return eval(expression)
    } catch (error) {
      console.error('An error occurred from running an expression', expression);
    }
  }
}

const isScene = function (scene) {
  return SceneManager._scene.constructor === scene
};

const updateKeypress = function keyPress () {
  if (Input.isTriggered(_Params.pauseKey)) {
    if (isScene(Scene_Map)) {
      SceneManager.push(Scene_GamePause);
    }
  }
};

const Scene_Map_Update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
  Scene_Map_Update.call(this);
  updateKeypress();
};

const Scene_Map_updateCallMenu = Scene_Map.prototype.updateCallMenu;
Scene_Map.prototype.updateCallMenu = function () {
  if (_Params.overrideMenuAccess && this.isMenuCalled()) {
    AudioManager.playSe(_Params.exitEnterSe);
    SceneManager.push(Scene_GamePause);
  } else {
    Scene_Map_updateCallMenu.call(this);
  }
};

}());
