'use client';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Calendar as CalendarIcon, Search, Star, Clock } from "lucide-react";
import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';
import Calendar from 'react-calendar'; 
import { format } from "date-fns";

// Dummy doctor data
const doctors = [
  {
    name: "Dr. Emily Johnson",
    specialty: "Cognitive Behavioral Therapy",
    rating: 4.9,
    nextAvailable: "Tomorrow",
    gender: "female"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Stress Management",
    rating: 4.8,
    nextAvailable: "In 2 days",
    gender: "male"
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Work-Life Balance Counseling",
    rating: 4.7,
    nextAvailable: "Next week",
    gender: "female"
  },
  {
    name: "Dr. David Kim",
    specialty: "Career Counseling",
    rating: 4.9,
    nextAvailable: "Today",
    gender: "male"
  },
  {
    name: "Dr. Lisa Rodriguez",
    specialty: "Anxiety and Depression",
    rating: 4.8,
    nextAvailable: "In 3 days",
    gender: "female"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Burnout Prevention",
    rating: 4.7,
    nextAvailable: "Tomorrow",
    gender: "male"
  }
];

// Dummy time slots
const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM"
];

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setSelectedTime(null); // Reset time when date changes
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked for ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}`);
      // Here you would typically send this data to your backend
    } else {
      alert("Please select both a date and time");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <header className="bg-white bg-opacity-10 backdrop-blur-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">ReachOut</Link>
          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-white hover:text-green-200 transition-colors">Features</Link>
            <Link href="#" className="text-white hover:text-green-200 transition-colors">About</Link>
            <Link href="#" className="text-white hover:text-green-200 transition-colors">Contact</Link>
            <Button className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Book an Appointment</h1>
        
        <div className="mb-8">
          <Card className="bg-white bg-opacity-20 backdrop-blur-md border-none">
            <CardContent className="p-6">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <Label htmlFor="search" className="text-white mb-2 block">Search for a doctor or specialty</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input id="search" className="pl-10 bg-white bg-opacity-20 text-white placeholder-gray-300 border-white" placeholder="e.g. Cognitive Behavioral Therapy" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="date" className="text-white mb-2 block">Preferred date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input id="date" type="date" className="pl-10 bg-white bg-opacity-20 text-white placeholder-gray-300 border-white" />
                  </div>
                </div>
                <div className="self-end">
                  <Button className="bg-white text-blue-600 hover:bg-green-100">Search</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white hover:bg-opacity-30 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-sm text-gray-200">{doctor.specialty}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-300 mr-1" />
                    <span>{doctor.nextAvailable}</span>
                  </div>
                </div>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Button className="w-full bg-white text-blue-600 hover:bg-green-100">Book Appointment</Button>
                  </Dialog.Trigger>
                  <Dialog.Content className="sm:max-w-[425px] bg-white p-4 rounded-lg shadow-lg">
                    <div className="dialog-header">
                      <h2 className="text-xl font-bold">Book Appointment with {doctor.name}</h2>
                    </div>
                    <div className="grid gap-4 py-4">
                      <Calendar
                        onChange={(value) => handleDateSelect(value as Date)} 
                        value={selectedDate}
                        className="rounded-md border"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button 
                            key={time} 
                            className={selectedTime === time ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" onClick={handleBooking}>
                      Confirm Booking
                    </Button>
                  </Dialog.Content>
                </Dialog.Root>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Your partner in mental wellness.</p>
        </div>
      </footer>
    </div>
  );
}
