from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    noteSerializer = NoteSerializer(notes, many=True)
    return Response(noteSerializer.data)

@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id = pk)
    noteSerializer = NoteSerializer(note, many=False)
    return Response(noteSerializer.data)

@api_view(['POST'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id = pk)
    noteSerializer = NoteSerializer(instance = note, data = data)
    if noteSerializer.is_valid():
        noteSerializer.save()
    return Response(noteSerializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id = pk)
    note.delete()
    return Response('Note was deleted')

@api_view(['POST'])
def createNote(request):
    data = request.data
    noteSerializer = NoteSerializer(data = data)
    if noteSerializer.is_valid():
        noteSerializer.save()
    return Response(noteSerializer.data)


