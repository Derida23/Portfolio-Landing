export const useNav = defineStore('nav', () => {
  const navigation = ref<String>('about')

  const setNav = (value: String) => {
    navigation.value = value

    return true
  }


  return { navigation, setNav }
})
