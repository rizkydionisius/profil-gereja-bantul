export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      mass_schedules: {
        Row: {
          id: string
          church_name: string
          schedule_type: string
          day: string
          time: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          church_name: string
          schedule_type: string
          day: string
          time: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          church_name?: string
          schedule_type?: string
          day?: string
          time?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      gallery_events: {
        Row: {
          id: string
          title: string
          event_date: string
          category: string
          cover_image: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          event_date: string
          category: string
          cover_image?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          event_date?: string
          category?: string
          cover_image?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      gallery_images: {
        Row: {
          id: string
          event_id: string
          image_url: string
          caption: string | null
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          image_url: string
          caption?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          image_url?: string
          caption?: string | null
          created_at?: string
        }
      }
    }
  }
}
