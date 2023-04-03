interface SanityBody {
  createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Amenity extends SanityBody {}

export interface Hotel extends SanityBody {}

export interface TourPackage extends SanityBody {}

export interface Post extends SanityBody {}

export interface HotelGroup extends SanityBody {}
