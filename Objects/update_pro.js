function addID(campaignRecord) {
  let id = `${campaignRecord.campaignName}-${campaignRecord.senderName}`;
  campaignRecord.id = `${campaignRecord.campaignName}-${campaignRecord.senderName}`;   
  return campaignRecord
}

export { addID }
