export default (req, res) => {
  function functionA(x, y, z) {
    this.x = x;
    this.z = z;
    this.y = y;
    this.display = function(p) {
      console.log('X: ', + p.x)
      console.log('Z: ', + p.z)
      console.log('Y: ', + p.y)
    }
  }
  function functionB(a, b, c) {
    this.a = a;
    this.x = b;
    this.z = c;
    this.display = function(p) {
      console.log('A: ', + p.a)
      console.log('X: ', + p.x)
      console.log('Z: ', + p.z)
    }
  }

  function fun(x, y) {
    for (i in x) {
      if (!(i in y))
        delete x[i];
    }
    for (i in y) {
      if (!(i in x))
      x[i] = y[i];
    }

    return x;
  }

  function main() {
    const a = new functionA(1,2,3)
    const b = new functionB(1,2,3)
    const ob = new fun(a, b)
    ob._x = 9;
    for (i in ob) {
      console.log(i + ":" + ob[i])
    }
  }
  main()

  res.status(200).json({ message: 'Star Link' })
}
