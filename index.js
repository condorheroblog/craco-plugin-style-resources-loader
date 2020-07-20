module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    // Check webpack config
    if (
      !webpackConfig || 
      !webpackConfig.module || 
      !webpackConfig.module.rules ||
      typeof webpackConfig.module.rules !== 'object'
    ) {
      throw new Error('craco-styles-resources-loader error: no valid webpackConfig.module.rules');
    }

    // Add the loader rule where needed
    const output = {...webpackConfig};
    Object.keys(output.module.rules).forEach((ruleKey, ruleIndex) => {
      const rule = output.module.rules[ruleKey];
      if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
        rule.oneOf.forEach((oneOf, oneOfIndex) => {
          if (
            oneOf.test && oneOf.use &&
            (`${oneOf.test}`.includes('css') || `${oneOf.test}`.includes('styles'))
          ) {
            const options = pluginOptions && pluginOptions.resources ? {
              resources: pluginOptions.resources,
            } : {};

            output.module.rules[ruleIndex].oneOf[oneOfIndex].use.push({
              loader: 'styles-resources-loader',
              options,
            })
          }
        })
      }
    })
    return output;
  }
};