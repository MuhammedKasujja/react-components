export const mergeClassNames = (...classes: any[]) => {
     // remove all falsy values ie [empty strings, null, undefined & false]
    return classes.filter(Boolean).join(' ')
    
    // return classes
    //   .filter((ele: string) => ele !== '')
    //   .filter((ele: null) => ele !== null)
    //   .filter((ele: undefined) => ele !== undefined)
    //   .filter((ele: boolean) => ele !== false)
    //   .join(' ')
  }
  