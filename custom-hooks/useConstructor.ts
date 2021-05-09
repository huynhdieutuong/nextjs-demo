import { useRef } from 'react'

type ConstructorCallback = () => void

function useConstructor(callback: ConstructorCallback): void {
  const isLoading = useRef(false)

  if (!isLoading.current) {
    callback()
    
    isLoading.current = true
  }
}

export default useConstructor