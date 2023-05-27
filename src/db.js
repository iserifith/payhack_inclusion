const sme_info = {
  totalSmeAvailable: "2000",
  totalSmeWithContact: "800",
  totalInquiriesSent: "100",
};

const response_rate = {
  respondedSmePerc: "20",
  noResponSmePerc: "80",
};

const qr_usage = {
  respondedUseQRPerc: "50",
  noRespondedUseQrPerc: "50",
};

const qr_dist = {
  DuitNow: "3000",
  TNG: "1400",
  MAE: "200",
};

const prospect = {
  yesTotal: 10000,
  yesPerc: "20%",
};

const challenges = {
  "do not have app": "3000",
  tedious: "3230",
};

export const getSmeInfo = () => {
  return sme_info;
};

export const getResponse_rate = () => {
  return response_rate;
};

export const getQRUsage = () => {
  return qr_usage;
};

export const getQRDist = () => {
  return qr_dist;
};

export const getProspect = () => {
  return prospect;
};

export const getChallenges = () => {
  return challenges;
};

export const getData = async () => {
  try {
    const url =
      "https://raw.githubusercontent.com/iserifith/payhack_inclusion/zul_branch/getQrUsage.json?token=GHSAT0AAAAAACCA5H5QSIU4PIJET7QRJ452ZDSFCEA";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};
