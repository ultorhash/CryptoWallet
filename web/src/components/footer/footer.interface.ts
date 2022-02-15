export interface IPartner {
  name: string;
  logoUrl: string;
  logoAlt: string;
}

export interface ISocial {
  icon: any;
  to: string;
}

export interface ILink {
  text: string;
  to: string;
}

export interface IFooterData {
  title: string;
  partners?: IPartner[];
  socials?: ISocial[];
  links?: ILink[];
}