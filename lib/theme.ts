import {useDarkMode} from "use-dark-mode-ts";
import {useTheme} from "next-themes";


export const useDarkTheme = () => {
    const systemInDarkMode = useDarkMode()
    const {theme} = useTheme()
    if (!theme || theme == "system")
        return systemInDarkMode
    else
        return theme == 'dark'

}