function squares(a, b) {
  let leftLimit = Math.floor(Math.sqrt(a))
  let rigthLimit = Math.floor(Math.sqrt(b))

  let squareLeft = leftLimit * leftLimit
  let squareRigth = rigthLimit * rigthLimit
  let diff = rigthLimit - leftLimit

  return a > squareLeft && b >= squareRigth ? diff : diff + 1
}
