"use client"

import Image from 'next/image'

import { useModel } from '@/context/ModelContext'
import { Messages, User } from '@/data/data'
import { ANIMATIONS } from '@/components/BuchModel'
import { FloatingPanel } from '@/components/FloatingPanel'
import { useScene, SCENES } from '@/context/SceneContext'

export function FloatingMenu() {
  const { selectedUser, setSelectedUser, selectedAnimation, setSelectedAnimation } = useModel()
  const { selectedScene, setSelectedScene } = useScene()

  // Get unique users from Messages array
  const uniqueUsers = Array.from(new Set(Messages.map(m => m.from)))

  // Function to select random scene and animation
  const selectRandomSceneAndAnimation = () => {
    // Random scene
    const sceneKeys = Object.keys(SCENES)
    const randomSceneKey = sceneKeys[Math.floor(Math.random() * sceneKeys.length)]
    setSelectedScene(SCENES[randomSceneKey])

    // Random animation
    const animationKeys = Object.keys(ANIMATIONS)
    const randomAnimationKey = animationKeys[Math.floor(Math.random() * animationKeys.length)]
    setSelectedAnimation(randomAnimationKey)
  }

  // Handle user selection with random scene and animation
  const handleUserSelect = (user: User) => {
    setSelectedUser(user)
    selectRandomSceneAndAnimation()
  }

  const message = selectedUser && Messages.find(m => m.from.id === selectedUser.id)

  return (
    <div className="absolute top-4 right-4 flex flex-col gap-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <FloatingPanel title="Fashion Designer" className="w-96" defaultCollapsed={false}>
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            {uniqueUsers.map((user: User) => (
              <button
                key={user.id}
                onClick={() => handleUserSelect(user)}
                className={`p-2 rounded ${
                  selectedUser?.id === user.id
                    ? 'bg-white/20 border border-white/40'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative">
                    <Image
                      src={user.avatarSrc}
                      alt={user.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">{user.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedUser && (
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-lg font-semibold mb-2">{selectedUser.name}</h3>
            <p className="text-sm text-white/80">
              {message?.message || "No message available"}
            </p>
            {message?.prompt && (
              <div className="mt-4 text-sm text-white/80">
                <h3 className="text-lg font-semibold mb-2">Prompt</h3>
                <p>{message.prompt}</p>
              </div>
            )}
            {selectedUser.id === 'buch' && <BuchImage />}
          </div>
        )}
      </FloatingPanel>

      <FloatingPanel title="Animation" className="w-96" defaultCollapsed={true}>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(ANIMATIONS).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedAnimation(key)}
              className={`p-2 rounded ${
                selectedAnimation === key
                  ? 'bg-white/20 border border-white/40'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
            >
              <span className="text-sm capitalize">{value.name}</span>
            </button>
          ))}
        </div>
      </FloatingPanel>

      <FloatingPanel title="Scene" className="w-96" defaultCollapsed={true}>
        <div className="grid grid-cols-2 gap-2">
          {Object.values(SCENES).map((scene) => (
            <button
              key={scene.id}
              onClick={() => setSelectedScene(scene)}
              className={`p-2 rounded ${
                selectedScene.id === scene.id
                  ? 'bg-white/20 border border-white/40'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{scene.name}</span>
                {scene.description && (
                  <span className="text-xs text-white/60">{scene.description}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </FloatingPanel>
    </div>
  )
}

function BuchImage() {
  return (
    <div className="relative w-full aspect-[16/9]">
      <Image
        src="/buch_t.png"
        alt="Buch"
        fill
        sizes="(max-width: 768px) 100vw, 384px"
        className="object-contain"
      />
    </div>
  )
}
