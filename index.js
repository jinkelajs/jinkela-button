class Button extends Jinkela {

  set disabled(value) { this.element.classList[value ? 'add' : 'remove']('disabled'); }
  get disabled() { return this.element.classList.contains('disabled'); }

  set busy(value) { this.element.classList[value ? 'add' : 'remove']('busy'); }
  get busy() { return this.element.classList.contains('busy'); }

  set round(value) { this.element.classList[value ? 'add' : 'remove']('round'); }
  get round() { return this.element.classList.contains('round'); }

  set plain(value) { this.element.dataset.plain = !!value; }
  get plain() { return this.element.dataset.plain === 'true'; }

  set size(value) { this.element.dataset.size = value; }
  get size() { return this.element.dataset.size; }

  set type(value) { this.element.dataset.type = value; }
  get type() { return this.element.dataset.type; }

  init() {
    this.element.addEventListener('click', () => {
      if (this.busy || this.disabled) return;
      this.busy = true;
      Promise.resolve().then(this.handler).then(() => {
        this.busy = false;
      }, () => {
        this.busy = false;
      });
    });
  }

  get template() {
    return `
      <button data-plain="false">
        <span ref="children"></span>
      </button>
    `;
  }

  get styleSheet() {
    const m = (a, s) => Math.round(parseInt(s, 16) * a + 255 - 255 * a).toString(16).replace(/^.$/, '0$&');
    const w = (alpha, color) => color.replace(/\w\w/g, m.bind(null, alpha));
    const w1 = w.bind(null, 0.1);
    const w2 = w.bind(null, 0.2);
    const w3 = w.bind(null, 0.3);
    const w4 = w.bind(null, 0.4);
    const w5 = w.bind(null, 0.5);
    const w6 = w.bind(null, 0.6);
    const w8 = w.bind(null, 0.8);
    const types = { primary: '#409eff', success: '#67c23a', info: '#909399', warning: '#e6a23c', danger: '#f56c6c' };
    return `
      :scope {
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        margin-right: 1em;
        cursor: pointer;
        font-size: 14px;
        border: 1px solid #ccc;
        position: relative;
        border: 1px solid;
        display: inline-flex;
        font-weight: 500;
        line-height: 1;
        user-select: none;
        align-items: center;
        justify-content: center;
        transition: .1s;
        outline: 0;

        /* size */
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &[data-size=medium] { padding: 10px 20px; font-size: 14px; border-radius: 4px; }
        &[data-size=small] { padding: 9px 15px; font-size: 12px; border-radius: 3px; }
        &[data-size=mini] { padding: 7px 15px; font-size: 12px; border-radius: 3px; }

        /* plain */
        &[data-plain=false] {
          border-color: #dcdfe6; color: #606266; background: #fff;
          &:hover, &:focus { color: #409eff; border-color: ${w3('#409eff')}; background-color: ${w1('#409eff')}; }
          &.disabled { border-color: #ebeef5; color: #c0c4cc; background: #fff; }
        }
        &[data-plain=true] {
          border-color: #dcdfe6; color: #606266; background: #fff;
          &:hover, &:focus { background: #fff; border-color: #409eff; color: #409eff; }
          &.disabled { border-color: #ebeef5; color: #c0c4cc; background: #fff; }
        }

        /* type */
        ${Object.keys(types).map(i => `
          &[data-type=${i}] {
            &[data-plain=false] {
              color: #fff; background-color: ${types[i]}; border-color: ${types[i]};
              &:hover, &:focus { background-color: ${w8(types[i])}; border-color: ${w8(types[i])}; }
              &.disabled { background: ${w5(types[i])}; border-color: ${w5(types[i])}; }
            }
            &[data-plain=true] {
              color: ${types[i]}; background: ${w1(types[i])}; border-color: ${w4(types[i])};
              &:hover, &:focus { color: #fff; background-color: ${types[i]}; border-color: ${types[i]}; }
              &.disabled { color: ${w6(types[i])}; background-color: ${w1(types[i])}; border-color: ${w2(types[i])}; }
            }
          }
        `).join('\n')}

        /* type-text */
        &[data-type=text] {
          border-color: transparent;
          background: transparent;
          color: #409eff;
          padding-left: 0;
          padding-right: 0;
          &:hover, &:focus {
            border-color: transparent;
            background: transparent;
            color: ${w8('409eff')};
          }
          &.disabled {
            border-color: transparent;
            background: transparent;
            color: #c0c4cc;
          }
        }

        &.round { border-radius: 100px; }
        &.busy.busy {
          cursor: wait;
          animation: buttonFlashing 500ms infinite;
        }
        &.disabled {
          cursor: not-allowed;
          color: #bbb;
        }
      }
      @keyframes buttonFlashing {
        0% { opacity: 1; }
        50% { opacity: .5; }
        100% { opacity: 1; }
      }
    `;
  }

}

window.Button = Button;
