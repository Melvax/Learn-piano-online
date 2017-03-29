// Generated by CoffeeScript 1.6.3
(function() {
  var PianoKey, PianoKeyboard, PianoKeyboardDesign,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PianoKeyboardDesign = (function() {
    PianoKeyboardDesign.prototype.KeyType = {
      WhiteC: 0,
      WhiteD: 1,
      WhiteE: 2,
      WhiteF: 3,
      WhiteG: 4,
      WhiteA: 5,
      WhiteB: 6,
      Black: 7
    };

    PianoKeyboardDesign.prototype.whiteKeyStep = 0.236;

    PianoKeyboardDesign.prototype.whiteKeyWidth = 0.226;

    PianoKeyboardDesign.prototype.whiteKeyHeight = 0.22;

    PianoKeyboardDesign.prototype.whiteKeyLength = 1.50;

    PianoKeyboardDesign.prototype.blackKeyWidth = 0.10;

    PianoKeyboardDesign.prototype.blackKeyHeight = 0.24;

    PianoKeyboardDesign.prototype.blackKeyLength = 1.00;

    PianoKeyboardDesign.prototype.blackKeyShiftCDE = 0.0216;

    PianoKeyboardDesign.prototype.blackKeyShiftFGAB = 0.0340;

    PianoKeyboardDesign.prototype.blackKeyPosY = 0.10;

    PianoKeyboardDesign.prototype.blackKeyPosZ = -0.24;

    PianoKeyboardDesign.prototype.noteDropPosZ4WhiteKey = 0.25;

    PianoKeyboardDesign.prototype.noteDropPosZ4BlackKey = 0.75;

    PianoKeyboardDesign.prototype.whiteKeyColor = 0xffffff;

    PianoKeyboardDesign.prototype.blackKeyColor = 0x111111;

    PianoKeyboardDesign.prototype.keyDip = 0.08;

    PianoKeyboardDesign.prototype.keyUpSpeed = 0.03;

    PianoKeyboardDesign.prototype.keyInfo = [];

    PianoKeyboardDesign.prototype.noteToColor = (function() {
      var map, offset;
      map = MusicTheory.Synesthesia.map('August Aeppli (1940)');
      offset = MIDI.pianoKeyOffset;
      return function(note) {
        if (map[note - offset] == null) {
          return 0x000000;
        }
        return parseInt(map[note - offset].hex, 16);
      };
    })();

    function PianoKeyboardDesign() {
      var i, _i;
      for (i = _i = 0; _i < 128; i = ++_i) {
        this.keyInfo[i] = {};
      }
      this._initKeyType();
      this._initKeyPos();
    }

    PianoKeyboardDesign.prototype._initKeyType = function() {
      var Black, KeyType, WhiteA, WhiteB, WhiteC, WhiteD, WhiteE, WhiteF, WhiteG, i, keyInfo, noteNo, _i;
      keyInfo = this.keyInfo, KeyType = this.KeyType;
      WhiteC = KeyType.WhiteC, WhiteD = KeyType.WhiteD, WhiteE = KeyType.WhiteE, WhiteF = KeyType.WhiteF, WhiteG = KeyType.WhiteG, WhiteA = KeyType.WhiteA, WhiteB = KeyType.WhiteB, Black = KeyType.Black;
      for (i = _i = 0; _i < 10; i = ++_i) {
        noteNo = i * 12;
        keyInfo[noteNo + 0].keyType = WhiteC;
        keyInfo[noteNo + 1].keyType = Black;
        keyInfo[noteNo + 2].keyType = WhiteD;
        keyInfo[noteNo + 3].keyType = Black;
        keyInfo[noteNo + 4].keyType = WhiteE;
        keyInfo[noteNo + 5].keyType = WhiteF;
        keyInfo[noteNo + 6].keyType = Black;
        keyInfo[noteNo + 7].keyType = WhiteG;
        keyInfo[noteNo + 8].keyType = Black;
        keyInfo[noteNo + 9].keyType = WhiteA;
        keyInfo[noteNo + 10].keyType = Black;
        keyInfo[noteNo + 11].keyType = WhiteB;
      }
      noteNo = 120;
      keyInfo[noteNo + 0].keyType = WhiteC;
      keyInfo[noteNo + 1].keyType = Black;
      keyInfo[noteNo + 2].keyType = WhiteD;
      keyInfo[noteNo + 3].keyType = Black;
      keyInfo[noteNo + 4].keyType = WhiteE;
      keyInfo[noteNo + 5].keyType = WhiteF;
      keyInfo[noteNo + 6].keyType = Black;
      return keyInfo[noteNo + 7].keyType = WhiteB;
    };

    PianoKeyboardDesign.prototype._initKeyPos = function() {
      var Black, KeyType, WhiteA, WhiteB, WhiteC, WhiteD, WhiteE, WhiteF, WhiteG, blackKeyShiftCDE, blackKeyShiftFGAB, keyInfo, noteNo, posX, prevKeyType, shift, whiteKeyStep, _i, _j, _results;
      KeyType = this.KeyType, keyInfo = this.keyInfo, whiteKeyStep = this.whiteKeyStep, blackKeyShiftCDE = this.blackKeyShiftCDE, blackKeyShiftFGAB = this.blackKeyShiftFGAB;
      WhiteC = KeyType.WhiteC, WhiteD = KeyType.WhiteD, WhiteE = KeyType.WhiteE, WhiteF = KeyType.WhiteF, WhiteG = KeyType.WhiteG, WhiteA = KeyType.WhiteA, WhiteB = KeyType.WhiteB, Black = KeyType.Black;
      noteNo = 0;
      prevKeyType = WhiteB;
      posX = 0.0;
      shift = 0.0;
      keyInfo[noteNo].keyCenterPosX = posX;
      prevKeyType = keyInfo[noteNo].keyType;
      for (noteNo = _i = 1; _i < 128; noteNo = ++_i) {
        if (prevKeyType === Black) {
          if (keyInfo[noteNo].keyType === Black) {

          } else {
            posX += whiteKeyStep / 2.0;
          }
        } else {
          if (keyInfo[noteNo].keyType === Black) {
            posX += whiteKeyStep / 2.0;
          } else {
            posX += whiteKeyStep;
          }
        }
        keyInfo[noteNo].keyCenterPosX = posX;
        prevKeyType = keyInfo[noteNo].keyType;
      }
      prevKeyType = WhiteC;
      _results = [];
      for (noteNo = _j = 0; _j < 128; noteNo = ++_j) {
        if (keyInfo[noteNo].keyType === Black) {
          switch (prevKeyType) {
            case WhiteC:
              shift = -blackKeyShiftCDE;
              break;
            case WhiteD:
              shift = +blackKeyShiftCDE;
              break;
            case WhiteF:
              shift = -blackKeyShiftFGAB;
              break;
            case WhiteG:
              shift = 0.0;
              break;
            case WhiteA:
              shift = +blackKeyShiftFGAB;
              break;
            default:
              shift = 0.0;
          }
          if (noteNo === 126) {
            shift = 0.0;
          }
          keyInfo[noteNo].keyCenterPosX += shift;
        }
        _results.push(prevKeyType = keyInfo[noteNo].keyType);
      }
      return _results;
    };

    return PianoKeyboardDesign;

  })();

  PianoKey = (function() {
    function PianoKey(design, note) {
      var Black, KeyType, blackKeyColor, blackKeyHeight, blackKeyLength, blackKeyPosY, blackKeyPosZ, blackKeyWidth, geometry, keyCenterPosX, keyDip, keyInfo, keyType, keyUpSpeed, material, position, whiteKeyColor, whiteKeyHeight, whiteKeyLength, whiteKeyWidth, _ref;
      blackKeyWidth = design.blackKeyWidth, blackKeyHeight = design.blackKeyHeight, blackKeyLength = design.blackKeyLength, blackKeyColor = design.blackKeyColor, whiteKeyWidth = design.whiteKeyWidth, whiteKeyHeight = design.whiteKeyHeight, whiteKeyLength = design.whiteKeyLength, whiteKeyColor = design.whiteKeyColor, blackKeyPosY = design.blackKeyPosY, blackKeyPosZ = design.blackKeyPosZ, keyDip = design.keyDip, keyInfo = design.keyInfo, keyUpSpeed = design.keyUpSpeed, KeyType = design.KeyType;
      Black = KeyType.Black;
      _ref = keyInfo[note], keyType = _ref.keyType, keyCenterPosX = _ref.keyCenterPosX;
      if (keyType === Black) {
        geometry = new THREE.BoxGeometry(blackKeyWidth, blackKeyHeight, blackKeyLength);
        material = new THREE.MeshPhongMaterial({
          color: blackKeyColor
        });
        position = new THREE.Vector3(keyCenterPosX, blackKeyPosY, blackKeyPosZ);
      } else {
        geometry = new THREE.BoxGeometry(whiteKeyWidth, whiteKeyHeight, whiteKeyLength);
        material = new THREE.MeshPhongMaterial({
          color: whiteKeyColor,
          emissive: 0x111111
        });
        position = new THREE.Vector3(keyCenterPosX, 0, 0);
      }
      this.model = new THREE.Mesh(geometry, material);
      this.model.position.copy(position);
      this.keyUpSpeed = keyUpSpeed;
      this.originalY = position.y;
      this.pressedY = this.originalY - keyDip;
    }

    PianoKey.prototype.press = function() {
      this.model.position.y = this.pressedY;
      return this.isPressed = true;
    };

    PianoKey.prototype.release = function() {
      return this.isPressed = false;
    };

    PianoKey.prototype.update = function() {
      var offset;
      if (this.model.position.y < this.originalY && !this.isPressed) {
        offset = this.originalY - this.model.position.y;
        return this.model.position.y += Math.min(offset, this.keyUpSpeed);
      }
    };

    return PianoKey;

  })();

  PianoKeyboard = (function() {
    function PianoKeyboard(design, noteToColor) {
      this.update = __bind(this.update, this);
      var key, note, _i, _ref;
      this.model = new THREE.Object3D();
      this.keys = [];
      for (note = _i = 0, _ref = design.keyInfo.length; 0 <= _ref ? _i < _ref : _i > _ref; note = 0 <= _ref ? ++_i : --_i) {
        key = new PianoKey(design, note);
        this.keys.push(key);
        if ((20 < note && note < 109)) {
          this.model.add(key.model);
        }
      }
      this.model.y -= design.whiteKeyHeight / 2;
    }

    PianoKeyboard.prototype.press = function(note) {
     // return this.keys[note].press();
    };

    PianoKeyboard.prototype.release = function(note) {
     // return this.keys[note].release();
    };

    PianoKeyboard.prototype.update = function() {
      var key, _i, _len, _ref, _results;
      _ref = this.keys;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        _results.push(key.update());
      }
      return _results;
    };

    return PianoKeyboard;

  })();

  this.PianoKeyboardDesign = PianoKeyboardDesign;

  this.PianoKeyboard = PianoKeyboard;

}).call(this);
