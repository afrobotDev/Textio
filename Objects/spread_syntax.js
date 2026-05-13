function mergeTemplates(defaultTemplates, customTemplates) {
    return { ...defaultTemplates, ...customTemplates };
}


export { mergeTemplates }
