class ButtonBasicDemo extends DemoBase {
  get template() {
    return `
      <dl>
        <dt>Basic Usage</dt>
        <dd>
          <p>
            <jkl-button>Default</jkl-button>
            <jkl-button type="primary">Primary</jkl-button>
            <jkl-button type="success">Success</jkl-button>
            <jkl-button type="info">Info</jkl-button>
            <jkl-button type="warning">Warning</jkl-button>
            <jkl-button type="danger">Danger</jkl-button>
          </p>
          <p>
            <jkl-button plain="plain">Default</jkl-button>
            <jkl-button plain="plain" type="primary">Primary</jkl-button>
            <jkl-button plain="plain" type="success">Success</jkl-button>
            <jkl-button plain="plain" type="info">Info</jkl-button>
            <jkl-button plain="plain" type="warning">Warning</jkl-button>
            <jkl-button plain="plain" type="danger">Danger</jkl-button>
          </p>
          <p>
            <jkl-button round="round">Default</jkl-button>
            <jkl-button round="round" type="primary">Primary</jkl-button>
            <jkl-button round="round" type="success">Success</jkl-button>
            <jkl-button round="round" type="info">Info</jkl-button>
            <jkl-button round="round" type="warning">Warning</jkl-button>
            <jkl-button round="round" type="danger">Danger</jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonDisabledDemo extends DemoBase {
  get template() {
    return `
      <dl>
        <dt>Disabled Button</dt>
        <dd>
          <p>
            <jkl-button>Default</jkl-button>
            <jkl-button disabled="disabled" type="primary">Primary</jkl-button>
            <jkl-button disabled="disabled" type="success">Success</jkl-button>
            <jkl-button disabled="disabled" type="info">Info</jkl-button>
            <jkl-button disabled="disabled" type="warning">Warning</jkl-button>
            <jkl-button disabled="disabled" type="danger">Danger</jkl-button>
          </p>
          <p>
            <jkl-button disabled="disabled" plain="plain">Default</jkl-button>
            <jkl-button disabled="disabled" plain="plain" type="primary">Primary</jkl-button>
            <jkl-button disabled="disabled" plain="plain" type="success">Success</jkl-button>
            <jkl-button disabled="disabled" plain="plain" type="info">Info</jkl-button>
            <jkl-button disabled="disabled" plain="plain" type="warning">Warning</jkl-button>
            <jkl-button disabled="disabled" plain="plain" type="danger">Danger</jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonTextDemo extends DemoBase {
  get template() {
    return `
      <dl>
        <dt>Text Button</dt>
        <dd>
          <p>
            <jkl-button type="text">Text Button</jkl-button>
            <jkl-button disabled="disabled" type="text">Text Button</jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonIconDemo extends DemoBase {
  get template() {
    return `
      <dl>
        <dt>Icon Button</dt>
        <dd>
          <p>
            <jkl-button type="primary">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill="#fff" d="
                  M295 931 92 728l562-562 203 203L295 931 295 931z
                  M988 143 880 35c-26-26-70-24-99 4L679 140l203 203L984 242C1013 213 1014 169 988 143L988 143z
                  M73 760 1 1022l262-71L73 760zM73 760z
                "></path>
              </svg>
            </jkl-button>
            <jkl-button type="primary">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path fill="#fff" d="
                  M-48 883M1041 883M45 852M403 510c0-36 12-67 37-92 25-25 55-37 92-37 36 0 67 12 92 37 25 25 37 55 37
                  92 0 36-12 67-37 92-25 25-55 37-92 37-36 0-67-12-92-37C415 578 403 547 403 510zM219 595c7 27 19 53 32
                  78l-85 105 97 97 105-85c24 13 51 25 79 33l14 134 140 0 14-134c27-8 52-19 79-33l104 85 98-97 -86-105
                  c13-24 25-51 33-78l134-14L980 440l-134-14c-8-27-20-52-33-78l86-105-98-98-104 86 c-26-13 -51-25 -79-33
                  L602 62 462 62l-14 134c-28 8-54 20-79 33l-105-86-97 98 85 105c-13 26-24 51-32 78L84 440l0 140L219 595z
                "></path>
              </svg>
              &nbsp;<span>设置</span>
            </jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonBusyDemo extends DemoBase {
  handler() {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
  }
  get template() {
    return `
      <dl>
        <dt>Busy State Button</dt>
        <dd>
          <p>
            <jkl-button type="primary" handler="{handler}">Click to make me busy</jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonSizeDemo extends DemoBase {
  get template() {
    return `
      <dl>
        <dt>Sizes</dt>
        <dd>
          <p>
            <jkl-button>Default</jkl-button>
            <jkl-button size="medium">Medium</jkl-button>
            <jkl-button size="small">Small</jkl-button>
            <jkl-button size="mini">Mini</jkl-button>
          </p>
          <p>
            <jkl-button round="true">Default</jkl-button>
            <jkl-button round="true" size="medium">Medium</jkl-button>
            <jkl-button round="true" size="small">Small</jkl-button>
            <jkl-button round="true" size="mini">Mini</jkl-button>
          </p>
        </dd>
      </dl>
    `;
  }
}

class ButtonDemo extends Jinkela { // eslint-disable-line no-unused-vars
  init() {
    this.demoList = [
      new ButtonBasicDemo(),
      new ButtonDisabledDemo(),
      new ButtonTextDemo(),
      new ButtonIconDemo(),
      new ButtonBusyDemo(),
      new ButtonSizeDemo()
    ];
  }
  get template() {
    return `
      <div>
        <h2>Button</h2>
        <meta ref="demoList" />
      </div>
    `;
  }
  get styleSheet() {
    return `
      :scope {
        -webkit-font-smoothing: antialiased;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        > h2 {
          font-weight: 400;
          color: #1f2f3d;
          font-size: 28px;
          margin: 0;
        }
      }
    `;
  }
}
