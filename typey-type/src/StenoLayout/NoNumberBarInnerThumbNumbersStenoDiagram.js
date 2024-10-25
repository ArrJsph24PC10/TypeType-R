import React, { Component } from "react";

const numberBarKeyStrokeColor = "#7109AA";
const numberBarKeyOnColor = "#7109AA";
const numberBarKeyOffColor = "#E9D9F2";
const leftSUpperKeyStrokeColor = "#7109AA";
const leftSUpperKeyOnColor = "#7109AA";
const leftSUpperKeyOffColor = "#E9D9F2";
const leftSLowerKeyStrokeColor = "#7109AA";
const leftSLowerKeyOnColor = "#7109AA";
const leftSLowerKeyOffColor = "#E9D9F2";
const leftTKeyStrokeColor = "#7109AA";
const leftTKeyOnColor = "#7109AA";
const leftTKeyOffColor = "#E9D9F2";
const leftKKeyStrokeColor = "#7109AA";
const leftKKeyOnColor = "#7109AA";
const leftKKeyOffColor = "#E9D9F2";
const leftPKeyStrokeColor = "#7109AA";
const leftPKeyOnColor = "#7109AA";
const leftPKeyOffColor = "#E9D9F2";
const leftWKeyStrokeColor = "#7109AA";
const leftWKeyOnColor = "#7109AA";
const leftWKeyOffColor = "#E9D9F2";
const leftHKeyStrokeColor = "#7109AA";
const leftHKeyOnColor = "#7109AA";
const leftHKeyOffColor = "#E9D9F2";
const leftRKeyStrokeColor = "#7109AA";
const leftRKeyOnColor = "#7109AA";
const leftRKeyOffColor = "#E9D9F2";
const leftAKeyStrokeColor = "#7109AA";
const leftAKeyOnColor = "#7109AA";
const leftAKeyOffColor = "#E9D9F2";
const leftOKeyStrokeColor = "#7109AA";
const leftOKeyOnColor = "#7109AA";
const leftOKeyOffColor = "#E9D9F2";
const starUpperKeyStrokeColor = "#7109AA";
const starUpperKeyOnColor = "#7109AA";
const starUpperKeyOffColor = "#E9D9F2";
const starLowerKeyStrokeColor = "#7109AA";
const starLowerKeyOnColor = "#7109AA";
const starLowerKeyOffColor = "#E9D9F2";
const rightEKeyStrokeColor = "#7109AA";
const rightEKeyOnColor = "#7109AA";
const rightEKeyOffColor = "#E9D9F2";
const rightUKeyStrokeColor = "#7109AA";
const rightUKeyOnColor = "#7109AA";
const rightUKeyOffColor = "#E9D9F2";
const rightFKeyStrokeColor = "#7109AA";
const rightFKeyOnColor = "#7109AA";
const rightFKeyOffColor = "#E9D9F2";
const rightRKeyStrokeColor = "#7109AA";
const rightRKeyOnColor = "#7109AA";
const rightRKeyOffColor = "#E9D9F2";
const rightPKeyStrokeColor = "#7109AA";
const rightPKeyOnColor = "#7109AA";
const rightPKeyOffColor = "#E9D9F2";
const rightBKeyStrokeColor = "#7109AA";
const rightBKeyOnColor = "#7109AA";
const rightBKeyOffColor = "#E9D9F2";
const rightLKeyStrokeColor = "#7109AA";
const rightLKeyOnColor = "#7109AA";
const rightLKeyOffColor = "#E9D9F2";
const rightGKeyStrokeColor = "#7109AA";
const rightGKeyOnColor = "#7109AA";
const rightGKeyOffColor = "#E9D9F2";
const rightTKeyStrokeColor = "#7109AA";
const rightTKeyOnColor = "#7109AA";
const rightTKeyOffColor = "#E9D9F2";
const rightSKeyStrokeColor = "#7109AA";
const rightSKeyOnColor = "#7109AA";
const rightSKeyOffColor = "#E9D9F2";
const rightDKeyStrokeColor = "#7109AA";
const rightDKeyOnColor = "#7109AA";
const rightDKeyOffColor = "#E9D9F2";
const rightZKeyStrokeColor = "#7109AA";
const rightZKeyOnColor = "#7109AA";
const rightZKeyOffColor = "#E9D9F2";
const numberBarOnColor = "#FFFFFF";
const numberBarOffColor = "#FFFFFF";
const leftSUpperOnColor = "#FFFFFF";
const leftSUpperOffColor = "#FFFFFF";
const leftSLowerOnColor = "#FFFFFF";
const leftSLowerOffColor = "#FFFFFF";
const leftTOnColor = "#FFFFFF";
const leftTOffColor = "#FFFFFF";
const leftKOnColor = "#FFFFFF";
const leftKOffColor = "#FFFFFF";
const leftPOnColor = "#FFFFFF";
const leftPOffColor = "#FFFFFF";
const leftWOnColor = "#FFFFFF";
const leftWOffColor = "#FFFFFF";
const leftHOnColor = "#FFFFFF";
const leftHOffColor = "#FFFFFF";
const leftROnColor = "#FFFFFF";
const leftROffColor = "#FFFFFF";
const leftAOnColor = "#FFFFFF";
const leftAOffColor = "#FFFFFF";
const leftOOnColor = "#FFFFFF";
const leftOOffColor = "#FFFFFF";
const starUpperOnColor = "#FFFFFF";
const starUpperOffColor = "#FFFFFF";
const starLowerOnColor = "#FFFFFF";
const starLowerOffColor = "#FFFFFF";
const rightEOnColor = "#FFFFFF";
const rightEOffColor = "#FFFFFF";
const rightUOnColor = "#FFFFFF";
const rightUOffColor = "#FFFFFF";
const rightFOnColor = "#FFFFFF";
const rightFOffColor = "#FFFFFF";
const rightROnColor = "#FFFFFF";
const rightROffColor = "#FFFFFF";
const rightPOnColor = "#FFFFFF";
const rightPOffColor = "#FFFFFF";
const rightBOnColor = "#FFFFFF";
const rightBOffColor = "#FFFFFF";
const rightLOnColor = "#FFFFFF";
const rightLOffColor = "#FFFFFF";
const rightGOnColor = "#FFFFFF";
const rightGOffColor = "#FFFFFF";
const rightTOnColor = "#FFFFFF";
const rightTOffColor = "#FFFFFF";
const rightSOnColor = "#FFFFFF";
const rightSOffColor = "#FFFFFF";
const rightDOnColor = "#FFFFFF";
const rightDOffColor = "#FFFFFF";
const rightZOnColor = "#FFFFFF";
const rightZOffColor = "#FFFFFF";

class NoNumberBarInnerThumbNumbersStenoDiagram extends Component {
  render() {
    const diagramWidth = this.props.diagramWidth || 140;
    const svgDiagramID = this.props.id || "stenoDiagram";

    return (
      <svg
        id={svgDiagramID}
        width={diagramWidth}
        fill="none"
        viewBox="0 0 204 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={true}
        className={this.props.classes}
      >
        <g id={"stenoboard-" + this.props.brief}>
          <rect
            height="19"
            id="numberBarKey"
            width="17"
            fill={
              this.props.numberBarKey
                ? numberBarKeyOnColor
                : numberBarKeyOffColor
            }
            rx="3.5"
            stroke={numberBarKeyStrokeColor}
            x="83.5"
            y="63.5"
          />
          <rect
            height="19"
            id="leftSUpperKey"
            width="17"
            fill={
              this.props.leftSUpperKey
                ? leftSUpperKeyOnColor
                : leftSUpperKeyOffColor
            }
            rx="3.5"
            stroke={leftSUpperKeyStrokeColor}
            x="3.5"
            y="13.5"
          />
          <rect
            height="19"
            id="leftSLowerKey"
            width="17"
            fill={
              this.props.leftSLowerKey
                ? leftSLowerKeyOnColor
                : leftSLowerKeyOffColor
            }
            rx="3.5"
            stroke={leftSLowerKeyStrokeColor}
            x="3.5"
            y="37.5"
          />
          <rect
            height="19"
            id="leftTKey"
            width="17"
            fill={this.props.leftTKey ? leftTKeyOnColor : leftTKeyOffColor}
            rx="3.5"
            stroke={leftTKeyStrokeColor}
            x="23.5"
            y="13.5"
          />
          <rect
            height="19"
            id="leftKKey"
            width="17"
            fill={this.props.leftKKey ? leftKKeyOnColor : leftKKeyOffColor}
            rx="3.5"
            stroke={leftKKeyStrokeColor}
            x="23.5"
            y="37.5"
          />
          <rect
            height="19"
            id="leftPKey"
            width="17"
            fill={this.props.leftPKey ? leftPKeyOnColor : leftPKeyOffColor}
            rx="3.5"
            stroke={leftPKeyStrokeColor}
            x="43.5"
            y="13.5"
          />
          <rect
            height="19"
            id="leftWKey"
            width="17"
            fill={this.props.leftWKey ? leftWKeyOnColor : leftWKeyOffColor}
            rx="3.5"
            stroke={leftWKeyStrokeColor}
            x="43.5"
            y="37.5"
          />
          <rect
            height="19"
            id="leftHKey"
            width="17"
            fill={this.props.leftHKey ? leftHKeyOnColor : leftHKeyOffColor}
            rx="3.5"
            stroke={leftHKeyStrokeColor}
            x="63.5"
            y="13.5"
          />
          <rect
            height="19"
            id="leftRKey"
            width="17"
            fill={this.props.leftRKey ? leftRKeyOnColor : leftRKeyOffColor}
            rx="3.5"
            stroke={leftRKeyStrokeColor}
            x="63.5"
            y="37.5"
          />
          <rect
            height="19"
            id="leftAKey"
            width="17"
            fill={this.props.leftAKey ? leftAKeyOnColor : leftAKeyOffColor}
            rx="3.5"
            stroke={leftAKeyStrokeColor}
            x="43.5"
            y="63.5"
          />
          <rect
            height="19"
            id="leftOKey"
            width="17"
            fill={this.props.leftOKey ? leftOKeyOnColor : leftOKeyOffColor}
            rx="3.5"
            stroke={leftOKeyStrokeColor}
            x="63.5"
            y="63.5"
          />
          <rect
            height="19"
            id="starUpperKey"
            width="17"
            fill={
              this.props.starUpperKey
                ? starUpperKeyOnColor
                : starUpperKeyOffColor
            }
            rx="3.5"
            stroke={starUpperKeyStrokeColor}
            x="83.5"
            y="13.5"
          />
          <rect
            height="19"
            id="starLowerKey"
            width="17"
            fill={
              this.props.starLowerKey
                ? starLowerKeyOnColor
                : starLowerKeyOffColor
            }
            rx="3.5"
            stroke={starLowerKeyStrokeColor}
            x="83.5"
            y="37.5"
          />
          <rect
            height="19"
            id="rightEKey"
            width="17"
            fill={this.props.rightEKey ? rightEKeyOnColor : rightEKeyOffColor}
            rx="3.5"
            stroke={rightEKeyStrokeColor}
            x="103.5"
            y="63.5"
          />
          <rect
            height="19"
            id="rightUKey"
            width="17"
            fill={this.props.rightUKey ? rightUKeyOnColor : rightUKeyOffColor}
            rx="3.5"
            stroke={rightUKeyStrokeColor}
            x="123.5"
            y="63.5"
          />
          <rect
            height="19"
            id="rightFKey"
            width="17"
            fill={this.props.rightFKey ? rightFKeyOnColor : rightFKeyOffColor}
            rx="3.5"
            stroke={rightFKeyStrokeColor}
            x="103.5"
            y="13.5"
          />
          <rect
            height="19"
            id="rightRKey"
            width="17"
            fill={this.props.rightRKey ? rightRKeyOnColor : rightRKeyOffColor}
            rx="3.5"
            stroke={rightRKeyStrokeColor}
            x="103.5"
            y="37.5"
          />
          <rect
            height="19"
            id="rightPKey"
            width="17"
            fill={this.props.rightPKey ? rightPKeyOnColor : rightPKeyOffColor}
            rx="3.5"
            stroke={rightPKeyStrokeColor}
            x="123.5"
            y="13.5"
          />
          <rect
            height="19"
            id="rightBKey"
            width="17"
            fill={this.props.rightBKey ? rightBKeyOnColor : rightBKeyOffColor}
            rx="3.5"
            stroke={rightBKeyStrokeColor}
            x="123.5"
            y="37.5"
          />
          <rect
            height="19"
            id="rightLKey"
            width="17"
            fill={this.props.rightLKey ? rightLKeyOnColor : rightLKeyOffColor}
            rx="3.5"
            stroke={rightLKeyStrokeColor}
            x="143.5"
            y="13.5"
          />
          <rect
            height="19"
            id="rightGKey"
            width="17"
            fill={this.props.rightGKey ? rightGKeyOnColor : rightGKeyOffColor}
            rx="3.5"
            stroke={rightGKeyStrokeColor}
            x="143.5"
            y="37.5"
          />
          <rect
            height="19"
            id="rightTKey"
            width="17"
            fill={this.props.rightTKey ? rightTKeyOnColor : rightTKeyOffColor}
            rx="3.5"
            stroke={rightTKeyStrokeColor}
            x="163.5"
            y="13.5"
          />
          <rect
            height="19"
            id="rightSKey"
            width="17"
            fill={this.props.rightSKey ? rightSKeyOnColor : rightSKeyOffColor}
            rx="3.5"
            stroke={rightSKeyStrokeColor}
            x="163.5"
            y="37.5"
          />
          <rect
            height="19"
            id="rightDKey"
            width="17"
            fill={this.props.rightDKey ? rightDKeyOnColor : rightDKeyOffColor}
            rx="3.5"
            stroke={rightDKeyStrokeColor}
            x="183.5"
            y="13.5"
          />
          <rect
            height="19"
            id="rightZKey"
            width="17"
            fill={this.props.rightZKey ? rightZKeyOnColor : rightZKeyOffColor}
            rx="3.5"
            stroke={rightZKeyStrokeColor}
            x="183.5"
            y="37.5"
          />
          <path
            id="numberBar"
            d="m88.552 78 .464-3.04h-1.84l.224-1.408h1.824l.384-2.544h-1.776l.208-1.392h1.776l.432-2.816h1.456l-.432 2.816h2.112l.432-2.816h1.456l-.432 2.816h1.84l-.208 1.392h-1.84l-.4 2.544h1.792L95.8 74.96h-1.776L93.56 78h-1.456l.464-3.04h-2.096L90.008 78zm2.128-4.448h2.096l.4-2.544h-2.112z"
            fill={this.props.numberBar ? numberBarOnColor : numberBarOffColor}
          />
          <path
            id="leftSUpper"
            d="M12.04 28.192q-1.328 0-2.352-.736a4 4 0 0 1-1.44-1.936l1.52-.56q.336.768.96 1.232.64.464 1.424.464.816 0 1.28-.432.48-.432.48-1.248 0-.72-.608-1.232-.608-.528-1.664-.992-.671-.288-1.088-.528a8 8 0 0 1-.928-.64 2.6 2.6 0 0 1-.768-.928 2.9 2.9 0 0 1-.24-1.2q0-1.2.896-2.016.912-.832 2.4-.832 1.185 0 2.032.608.864.608 1.136 1.568l-1.488.496a1.95 1.95 0 0 0-.688-.816q-.448-.336-1.072-.336-.688 0-1.12.368-.432.352-.432.96 0 .32.144.576.16.256.496.496.336.224.608.368.272.128.8.368.032.015.048.032.016 0 .048.016.032 0 .048.016.64.304 1.088.576.448.256.96.688.512.433.784 1.024.272.592.272 1.312 0 1.504-1.008 2.384t-2.528.88"
            fill={
              this.props.leftSUpper ? leftSUpperOnColor : leftSUpperOffColor
            }
          />
          <path
            id="leftSLower"
            d="M12.04 52.192q-1.328 0-2.352-.736a4 4 0 0 1-1.44-1.936l1.52-.56q.336.768.96 1.232.64.464 1.424.464.816 0 1.28-.432.48-.432.48-1.248 0-.72-.608-1.232-.608-.528-1.664-.992-.671-.288-1.088-.528a8 8 0 0 1-.928-.64 2.6 2.6 0 0 1-.768-.928 2.9 2.9 0 0 1-.24-1.2q0-1.2.896-2.016.912-.832 2.4-.832 1.185 0 2.032.608.864.608 1.136 1.568l-1.488.496a1.95 1.95 0 0 0-.688-.816q-.448-.336-1.072-.336-.688 0-1.12.368-.432.352-.432.96 0 .32.144.576.16.255.496.496.336.224.608.368.272.128.8.368.032.015.048.032.016 0 .048.016.032 0 .048.016.64.305 1.088.576.448.255.96.688t.784 1.024.272 1.312q0 1.504-1.008 2.384t-2.528.88"
            fill={
              this.props.leftSLower ? leftSLowerOnColor : leftSLowerOffColor
            }
          />
          <path
            id="leftT"
            d="M31.112 28v-9.632h-3.248V16.8h8.128v1.568h-3.248V28z"
            fill={this.props.leftT ? leftTOnColor : leftTOffColor}
          />
          <path
            id="leftK"
            d="m34.296 52-3.104-5.856-1.168 1.456V52h-1.648V40.8h1.648v4.512L33.56 40.8h1.904l-3.168 3.952L36.184 52z"
            fill={this.props.leftK ? leftKOnColor : leftKOffColor}
          />
          <path
            id="leftP"
            d="M48.376 28V16.8h3.712q1.904 0 2.784.992.896.975.896 2.416 0 1.344-.928 2.384-.912 1.024-2.752 1.024h-2.064V28zm1.648-5.904h2.16q.975 0 1.44-.56.48-.56.48-1.328 0-.736-.448-1.312-.449-.576-1.472-.576h-2.16z"
            fill={this.props.leftP ? leftPOnColor : leftPOffColor}
          />
          <path
            id="leftW"
            d="m49.128 52-1.712-11.2h1.504l.976 7.024.096.752a6 6 0 0 1 .144-.752l1.296-7.024h1.008l1.312 6.976q.096.4.144.704.016-.144.048-.368.032-.24.032-.32l.896-6.992h1.568L54.728 52h-1.312l-1.36-7.104q-.048-.224-.128-.768-.032.24-.128.752L50.44 52z"
            fill={this.props.leftW ? leftWOnColor : leftWOffColor}
          />
          <path
            id="leftH"
            d="M68.376 28V16.8h1.648v4.624h3.824V16.8h1.632V28h-1.632v-5.024h-3.824V28z"
            fill={this.props.leftH ? leftHOnColor : leftHOffColor}
          />
          <path
            id="leftR"
            d="M75.624 44.08q0 1.087-.592 1.968-.592.864-1.76 1.2L75.592 52h-1.824l-2.24-4.592h-1.504V52h-1.648V40.8h3.648q1.905 0 2.752.928.848.928.848 2.352m-5.6-1.76v3.552h2.032q1.008 0 1.456-.496.465-.512.464-1.264 0-.72-.448-1.248-.432-.544-1.472-.544z"
            fill={this.props.leftR ? leftROnColor : leftROffColor}
          />
          <path
            id="leftA"
            d="m54.616 78-.8-2.608h-3.76L49.272 78h-1.76l3.664-11.2h1.488L56.36 78zm-4.096-4.096h2.832l-1.136-3.712a11 11 0 0 1-.288-1.168q-.112.592-.288 1.168z"
            fill={this.props.leftA ? leftAOnColor : leftAOffColor}
          />
          <path
            id="leftO"
            d="M71.928 78.192q-1.04 0-1.84-.48a3.6 3.6 0 0 1-1.264-1.328 7.2 7.2 0 0 1-.704-1.84 10 10 0 0 1-.224-2.144q0-1.136.224-2.144.24-1.008.704-1.84t1.264-1.312q.8-.495 1.84-.496 1.056 0 1.856.496.8.48 1.264 1.312a6.8 6.8 0 0 1 .688 1.84q.225 1.008.224 2.144 0 1.136-.224 2.144a6.8 6.8 0 0 1-.688 1.84q-.464.832-1.264 1.328-.8.48-1.856.48m0-1.552q.784 0 1.328-.64.56-.64.784-1.568.225-.928.224-2.032 0-1.84-.576-3.04-.576-1.216-1.76-1.216-.784 0-1.328.656-.544.64-.768 1.568a8.7 8.7 0 0 0-.224 2.032q0 1.825.576 3.04.576 1.2 1.744 1.2"
            fill={this.props.leftO ? leftOOnColor : leftOOffColor}
          />
          <path
            id="starUpper"
            d="m90.52 26.16-1.248-.832.992-1.52.864-.8-1.168.272h-1.744v-1.52h1.744l1.168.256-.848-.784-.992-1.52 1.248-.832 1.104 1.664.288 1.072.304-1.072 1.104-1.664 1.248.832-.992 1.52-.864.784 1.168-.256h1.744v1.52h-1.744l-1.168-.272.864.8.992 1.52-1.248.832-1.104-1.664-.304-1.088-.304 1.088z"
            fill={this.props.starUpper ? starUpperOnColor : starUpperOffColor}
          />
          <path
            id="starLower"
            d="m90.52 50.16-1.248-.832.992-1.52.864-.8-1.168.272h-1.744v-1.52h1.744l1.168.256-.848-.784-.992-1.52 1.248-.832 1.104 1.664.288 1.072.304-1.072 1.104-1.664 1.248.832-.992 1.52-.864.784 1.168-.256h1.744v1.52h-1.744l-1.168-.272.864.8.992 1.52-1.248.832-1.104-1.664-.304-1.088-.304 1.088z"
            fill={this.props.starLower ? starLowerOnColor : starLowerOffColor}
          />
          <path
            id="rightE"
            d="M108.376 78V66.8h6.864v1.552h-5.216v3.088h3.472v1.552h-3.472v3.44h5.568V78z"
            fill={this.props.rightE ? rightEOnColor : rightEOffColor}
          />
          <path
            id="rightU"
            d="M131.928 78.192q-1.68 0-2.688-1.056-1.008-1.072-1.008-3.392V66.8h1.648v6.944q0 2.896 2.048 2.896 2.064 0 2.064-2.896V66.8h1.632v6.944q0 2.304-1.008 3.376-.992 1.072-2.688 1.072"
            fill={this.props.rightU ? rightUOnColor : rightUOffColor}
          />
          <path
            id="rightF"
            d="M108.376 28V16.8h7.296v1.552h-5.648v3.088h4.032v1.552h-4.032V28z"
            fill={this.props.rightF ? rightFOnColor : rightFOffColor}
          />
          <path
            id="rightR"
            d="M115.624 44.08q0 1.087-.592 1.968-.592.864-1.76 1.2l2.32 4.752h-1.824l-2.24-4.592h-1.504V52h-1.648V40.8h3.648q1.904 0 2.752.928t.848 2.352m-5.6-1.76v3.552h2.032q1.008 0 1.456-.496.464-.512.464-1.264 0-.72-.448-1.248-.432-.544-1.472-.544z"
            fill={this.props.rightR ? rightROnColor : rightROffColor}
          />
          <path
            id="rightP"
            d="M128.376 28V16.8h3.712q1.904 0 2.784.992.896.975.896 2.416 0 1.344-.928 2.384-.912 1.024-2.752 1.024h-2.064V28zm1.648-5.904h2.16q.977 0 1.44-.56.48-.56.48-1.328 0-.736-.448-1.312t-1.472-.576h-2.16z"
            fill={this.props.rightP ? rightPOnColor : rightPOffColor}
          />
          <path
            id="rightB"
            d="M128.376 52V40.8h3.504q1.856 0 2.688.848t.832 2.112q0 1.664-1.552 2.336.912.288 1.424 1.008.528.704.528 1.664 0 1.344-.896 2.288-.88.945-2.784.944zm1.648-6.56h1.584q1.072 0 1.616-.416.56-.432.56-1.184 0-1.536-1.84-1.536h-1.92zm0 5.04h2.24q1.04 0 1.472-.48.448-.48.448-1.184 0-1.872-2.4-1.872h-1.76z"
            fill={this.props.rightB ? rightBOnColor : rightBOffColor}
          />
          <path
            id="rightL"
            d="M148.376 28V16.8h1.648v9.616h5.248V28z"
            fill={this.props.rightL ? rightLOnColor : rightLOffColor}
          />
          <path
            id="rightG"
            d="M152.152 52.192q-1.407 0-2.4-.848a4.9 4.9 0 0 1-1.408-2.128q-.416-1.28-.416-2.816 0-1.504.432-2.784a4.85 4.85 0 0 1 1.44-2.144q.993-.864 2.352-.864 1.248 0 2 .56t1.28 1.536l-1.456.832q-.752-1.392-1.824-1.392-.88 0-1.472.688a3.84 3.84 0 0 0-.832 1.6 8.3 8.3 0 0 0-.224 1.968q0 1.776.64 3.008.657 1.232 1.888 1.232.913 0 1.408-.624.496-.64.496-1.68v-.384h-1.984v-1.52h3.68v1.44q0 2.032-1.008 3.184-1.008 1.136-2.592 1.136"
            fill={this.props.rightG ? rightGOnColor : rightGOffColor}
          />
          <path
            id="rightT"
            d="M171.112 28v-9.632h-3.248V16.8h8.128v1.568h-3.248V28z"
            fill={this.props.rightT ? rightTOnColor : rightTOffColor}
          />
          <path
            id="rightS"
            d="M172.04 52.192q-1.327 0-2.352-.736a4 4 0 0 1-1.44-1.936l1.52-.56q.336.768.96 1.232.64.464 1.424.464.816 0 1.28-.432.48-.432.48-1.248 0-.72-.608-1.232-.608-.528-1.664-.992a11 11 0 0 1-1.088-.528 8 8 0 0 1-.928-.64 2.64 2.64 0 0 1-.768-.928 2.9 2.9 0 0 1-.24-1.2q0-1.2.896-2.016.912-.832 2.4-.832 1.184 0 2.032.608.864.608 1.136 1.568l-1.488.496a1.96 1.96 0 0 0-.688-.816q-.448-.336-1.072-.336-.688 0-1.12.368-.432.352-.432.96 0 .32.144.576.16.255.496.496.336.224.608.368.272.128.8.368.032.015.048.032a.1.1 0 0 1 .048.016q.032 0 .048.016.64.305 1.088.576.449.255.96.688.512.432.784 1.024t.272 1.312q0 1.504-1.008 2.384t-2.528.88"
            fill={this.props.rightS ? rightSOnColor : rightSOffColor}
          />
          <path
            id="rightD"
            d="M188.376 28V16.8h2.72q1.04 0 1.872.32t1.376.848q.56.528.928 1.264.368.72.528 1.52.16.784.16 1.648 0 .816-.144 1.568a6 6 0 0 1-.512 1.504 4.5 4.5 0 0 1-.896 1.296q-.544.544-1.424.896-.864.336-1.952.336zm1.632-1.536h1.152q.848 0 1.472-.352.624-.367.96-.976.352-.608.512-1.28.16-.688.16-1.456 0-1.695-.736-2.88-.736-1.2-2.192-1.2h-1.328z"
            fill={this.props.rightD ? rightDOnColor : rightDOffColor}
          />
          <path
            id="rightZ"
            d="M195.64 40.8v1.232l-5.296 8.416h5.264V52h-7.376v-1.216l5.264-8.432H188.6V40.8z"
            fill={this.props.rightZ ? rightZOnColor : rightZOffColor}
          />
        </g>
      </svg>
    );
  }
}

export default NoNumberBarInnerThumbNumbersStenoDiagram;