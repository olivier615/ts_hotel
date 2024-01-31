const waitAndNavigate = (navigate: any ,path: string, time: number) => {
  setTimeout(() => {
    navigate(path)
  }, time)
}

export default waitAndNavigate