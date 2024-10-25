import mapBriefToNoNumberBarOuterThumbNumbersStenoKeys from "./mapBriefToNoNumberBarOuterThumbNumbersStenoKeys";

describe("map stroke to keys", () => {
  it("show no keys for empty brief", () => {
    let brief = "";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it('shows left-hand T for "it"', () => {
    let brief = "T";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: true,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it('shows right-hand -T for "the"', () => {
    let brief = "-T";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: true,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: true,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it('shows both S keys for "is"', () => {
    let brief = "S";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: true,
      leftSLowerKey: true,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("shows right number key for numbers on left hand", () => {
    let brief = "3";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: true,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: true,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("shows left number key for numbers on the right hand", () => {
    let brief = "7";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: true,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: true,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("show all star keys for starred brief", () => {
    let brief = "AO*EUS";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: true,
      leftOKey: true,
      leftStarUpperKey: true,
      leftStarLowerKey: true,
      rightStarUpperKey: true,
      rightStarLowerKey: true,
      dashKey: false,
      rightEKey: true,
      rightUKey: true,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: true,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it('show keys for dash-only brief "welcome"', () => {
    let brief = "HR-BG";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: true,
      leftRKey: true,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: true,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: true,
      rightLKey: false,
      rightGKey: true,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("show nothing when given non-steno letters", () => {
    let brief = "⌘";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("show left number key for numbers using right-hand vowel keys", () => {
    let brief = "#TPEU"; // 32
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: true,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: true,
      leftKKey: false,
      leftPKey: true,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: true,
      rightUKey: true,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  it("show left number key for easy-to-write #A", () => {
    let brief = "#A"; // 5
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: true,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: true,
      leftOKey: false,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: false,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  // e.g. '05' is #AOEU in standard number-bar steno, but #AOE in inner-thumbers and #AOU in outer-thumbers
  it("show right number key for #AOU to write 05", () => {
    let brief = "#AOU";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: false,
      rightNumberBarKey: true,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: true,
      leftOKey: true,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: false,
      rightUKey: true,
      rightFKey: false,
      rightRKey: false,
      rightPKey: false,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });

  // Exceptions: https://www.paulfioravanti.com/blog/steno-numbers-georgi/
  it("show left number bar for weird exceptions 60, 70, 80, 90", () => {
    let brief = "0EU7";
    expect(mapBriefToNoNumberBarOuterThumbNumbersStenoKeys(brief)).toEqual({
      leftNumberBarKey: true,
      rightNumberBarKey: false,
      leftSUpperKey: false,
      leftSLowerKey: false,
      leftTKey: false,
      leftKKey: false,
      leftPKey: false,
      leftWKey: false,
      leftHKey: false,
      leftRKey: false,
      leftAKey: false,
      leftOKey: true,
      leftStarUpperKey: false,
      leftStarLowerKey: false,
      rightStarUpperKey: false,
      rightStarLowerKey: false,
      dashKey: false,
      rightEKey: true,
      rightUKey: true,
      rightFKey: false,
      rightRKey: false,
      rightPKey: true,
      rightBKey: false,
      rightLKey: false,
      rightGKey: false,
      rightTKey: false,
      rightSKey: false,
      rightDKey: false,
      rightZKey: false,
    });
  });
});
