class Father {
  _render(){
    throw new Error('子类必须实现')
  }
  render(){
    return(`
      <ul>
        ${this._render()}
      </ul>
    `)
  }
}

export default Father;
