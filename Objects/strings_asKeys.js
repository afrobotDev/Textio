function getProviderCount(provider, counts) {
  if (!counts[provider]) {
    return 0;
  }
  return counts[provider];
}


  
export { getProviderCount };  
