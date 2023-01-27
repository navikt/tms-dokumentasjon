import {useDarkMode} from "use-dark-mode-ts";
import {useTheme} from "next-themes";

const userSettingIsDarkmode = (systemInDarkMode: boolean, theme: string | undefined) => {
    if (!theme || theme == "system")
        return systemInDarkMode
    else
        return theme == 'dark'
}

export const useDarkTheme = () => {
    const systemInDarkMode = useDarkMode()
    const {theme} = useTheme()

    return userSettingIsDarkmode(systemInDarkMode, theme)
}