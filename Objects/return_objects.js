function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent; 
  const clickRate = clicked/ sent; 
  const conversionRate = clicked / opened; 
  return {
    openRate, 
    clickRate, 
    conversionRate, 
  };
}


export { calculateCampaignMetrics };
